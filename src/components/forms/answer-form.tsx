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
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { answersSchema } from '@/lib/validations';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter, usePathname } from 'next/navigation';
import { createAnswer } from '@/lib/actions/answer.action';
import { useTheme } from '@/context/theme-provider';

const type: any = 'create';

interface Props {
  mongoUserId: string;
}

const AnswerForm = ({ mongoUserId }: Props) => {
  const { mode } = useTheme();
  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // 1. Define your form.
  const form = useForm<z.infer<typeof answersSchema>>({
    resolver: zodResolver(answersSchema),
    defaultValues: {
      answer: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof answersSchema>) {
    setIsSubmitting(true);
    // We can try to crate a question or we can try to edit a question

    try {
      // make an async call to our API -> create a quesion
      // contain all form data
      // navigate to home page
      await createAnswer({
        content: values.answer,
        author: JSON.parse(mongoUserId),
        path: pathname,
      });

      // navigate to home page
      router.push('/');
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full flex-col gap-10'
      >
        <FormField
          control={form.control}
          name='answer'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='paragraph-semibold text-dark400_light800'>
                Write your answer here
              </FormLabel>
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
          {isSubmitting ? (
            <>{type === 'edit' ? 'Editing...' : 'Posting...'}</>
          ) : (
            <>{type === 'edit' ? 'Edit Answer' : 'Post Answer'}</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AnswerForm;
