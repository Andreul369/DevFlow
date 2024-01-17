'use server';

import Question from '@/database/question.model';
import { connectToDatabase } from '../mongoose';
import Tag from '@/database/tag.model';
import User from '@/database/user.model';
import { GetAnswersParams, CreateAnswerParams } from './shared.types';
import { revalidatePath } from 'next/cache';
import Answer from '@/database/answer.model';

export async function getAnswers(params: GetAnswersParams) {
  try {
    connectToDatabase();

    const answers = await Question.find({})
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 });

    return { answers };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const createAnswer = async (params: CreateAnswerParams) => {
  try {
    connectToDatabase();

    const { content, author, question, path } = params;

    // Create the question
    const answer = await Answer.create({
      content,
      author,
      question,
    });

    const tagDocuments = [];

    // Create the tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    await Answer.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // Create an interaction record for the user's ask_question action

    // Increment author's reputation by 5 points for creating a question

    // Once we create a question we can call revalidatePath,
    // which will trigger a rebuild of the page at the given path.
    // This will ensure that the new question is displayed on the page withouth refreshing the page
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
