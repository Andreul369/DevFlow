'use server';

import Question from '@/database/question.model';
import { connectToDatabase } from '../mongoose';
import Tag from '@/database/tag.model';
import User from '@/database/user.model';
import {
  GetQuestionsParams,
  CreateQuestionParams,
  GetQuestionByIdParams,
  QuestionVoteParams,
  DeleteQuestionParams,
  EditQuestionParams,
  RecommendedParams,
} from './shared.types';
import { FilterQuery } from 'mongoose';

export async function getJobs(params: GetQuestionsParams) {
  try {
    connectToDatabase();

    const { searchQuery, filter, page = 1, pageSize = 20 } = params;

    // Calculate the number of posts to skip based on the page number and
    // page size
    const skipAmount = (page - 1) * pageSize;

    const query: FilterQuery<typeof Question> = {};

    if (searchQuery) {
      const escapedSearchQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      query.$or = [
        { title: { $regex: new RegExp(escapedSearchQuery, 'i') } },
        { content: { $regex: new RegExp(escapedSearchQuery, 'i') } },
      ];
    }

    // filter functionality
    let sortOptions = {};

    switch (filter) {
      case 'newest':
        sortOptions = { createdAt: -1 };
        break;
      case 'recommended':
        break;
      case 'frequent':
        sortOptions = { views: -1 };
        break;
      case 'unanswered':
        query.answers = { $size: 0 };
        break;
    }

    const questions = await Question.find(query)
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .skip(skipAmount)
      .limit(pageSize)
      .sort(sortOptions);

    // Calculate the total number of questions
    const totalQuestions = await Question.countDocuments(query);

    const isNext = totalQuestions > skipAmount + questions.length;

    return { questions: JSON.parse(JSON.stringify(questions)), isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
