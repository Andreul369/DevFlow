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

    // Create the answer
    const newAnswer = await Answer.create({ content, author, question });

    // Add the answer to the question's answers array
    await Question.findByIdAndUpdate(question, { $push: { answers: newAnswer._id } });

    // TODO: Add interaction...

    // Once we create a answer we can call revalidatePath,
    // which will trigger a rebuild of the page at the given path.
    // This will ensure that the new answer is displayed on the page withouth refreshing the page
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
