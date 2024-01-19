'use server';

import Question from '@/database/question.model';
import { connectToDatabase } from '../mongoose';
import { GetAnswersParams, CreateAnswerParams } from './shared.types';
import { revalidatePath } from 'next/cache';
import Answer from '@/database/answer.model';

export async function getAnswers(params: GetAnswersParams) {
  try {
    connectToDatabase();

    const { questionId, sortBy, page = 1, pageSize = 10 } = params;

    const skipAmount = (page - 1) * pageSize;

    let sortOptions = {};

    switch (sortBy) {
      case 'highestUpvotes':
        sortOptions = { upvotes: -1 };
        break;
      case 'lowestUpvotes':
        sortOptions = { upvotes: 1 };
        break;
      case 'recent':
        sortOptions = { createdAt: -1 };
        break;
      case 'old':
        sortOptions = { createdAt: 1 };
        break;

      default:
        break;
    }

    const answers = await Answer.find({ question: questionId })
      .populate('author', '_id clerkId name picture')
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);

    const totalAnswer = await Answer.countDocuments({
      question: questionId,
    });

    const isNextAnswer = totalAnswer > skipAmount + answers.length;

    return { answers, isNextAnswer };
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
