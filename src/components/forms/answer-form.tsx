'use client';

import React, { useRef, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { AnswersSchema } from '@/lib/validations';
import { Editor } from '@tinymce/tinymce-react';
import { usePathname } from 'next/navigation';
import { createAnswer } from '@/lib/actions/answer.action';
import { useTheme } from '@/context/theme-provider';
import Image from 'next/image';
import { toast } from 'sonner';

interface Props {
  question: string;
  questionId: string;
  authorId: string;
}

const AnswerForm = ({ question, questionId, authorId }: Props) => {
  const { mode } = useTheme();
  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittingAI, setIsSubmittingAI] = useState(false);
  const pathname = usePathname();

  // 1. Define your form.
  const form = useForm<z.infer<typeof AnswersSchema>>({
    resolver: zodResolver(AnswersSchema),
    defaultValues: {
      answer: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof AnswersSchema>) {
    setIsSubmitting(true);

    try {
      // make an async call to our API -> create an answer
      // contain all form data
      await createAnswer({
        content: values.answer,
        author: JSON.parse(authorId),
        question: JSON.parse(questionId),
        path: pathname,
      });

      form.reset();

      if (editorRef.current) {
        const editor = editorRef.current as any;
        editor.setContent('');
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const generateAIAnswer = async () => {
    if (!authorId) return;

    setIsSubmittingAI(true);
    toast.info('Feature will be implemented soon.');
    setIsSubmittingAI(false);
    // try {
    //   const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/chatgpt`, {
    //     method: 'POST',
    //     body: JSON.stringify({ question }),
    //   });

    //   const aiAnswer = await response.json();

    //   // Convert plain text to HTML format
    //   const formattedAnswer = aiAnswer.reply.replace(/\n/g, '<br />');

    //   if (editorRef.current) {
    //     const editor = editorRef.current as any;
    //     editor.setContent(formattedAnswer);
    //   }

    //   // Toast...
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsSubmittingAI(false);
    // }
  };

  return (
    <>
      <div className='flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-2'>
        <h4 className='paragraph-semibold text-dark400_light800'>
          Write your answer here
        </h4>

        <Button
          className='btn light-border-2 gap-1.5 rounded-md px-4 py-2.5 text-primary-500 shadow-none dark:text-primary-500'
          onClick={generateAIAnswer}
        >
          {isSubmittingAI ? (
            <>Generating...</>
          ) : (
            <>
              <Image
                src='/assets/icons/stars.svg'
                alt='star'
                width={12}
                height={12}
                className='object-contain'
              />
              Generate AI Answer
            </>
          )}
        </Button>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-6 flex w-full flex-col gap-10'
        >
          <FormField
            control={form.control}
            name='answer'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-3'>
                <FormControl className='mt-3.5'>
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(evt, editor) => {
                      // @ts-ignore
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={(content) => field.onChange(content)}
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'codesample',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                      ],
                      toolbar:
                        'undo redo | ' +
                        'codesample | bold italic forecolor | alignleft aligncenter | ' +
                        'alignright alignjustify | bullist numlist',
                      content_style: 'body { font-family:Inter; font-size:16px; }',
                      skin: mode === 'dark' ? 'oxide-dark' : 'oxide',
                      content_css: mode === 'dark' ? 'dark' : 'oxide',
                    }}
                  />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            className='primary-gradient w-fit self-end !text-light-900'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Posting...' : 'Post Answer'}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AnswerForm;
