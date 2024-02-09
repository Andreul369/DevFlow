import { getUserQuestions } from '@/lib/actions/user.action';
import { SearchParamsProps } from '@/types';
import QuestionCard from '../cards/question-card';
import PaginationComponent from './pagination';

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const QuestionsTab = async ({ searchParams, userId, clerkId }: Props) => {
  const { questions, isNextQuestions } = await getUserQuestions({
    userId,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      {questions.map((question) => (
        <QuestionCard
          clerkId={clerkId}
          key={question._id}
          title={question.title}
          _id={question._id}
          tags={question.tags}
          author={question.author}
          upvotes={question.upvotes}
          views={question.views}
          answers={question.answers}
          createdAt={question.createdAt}
        />
      ))}

      <div className='mt-10'>
        <PaginationComponent
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={isNextQuestions}
        />
      </div>
    </>
  );
};

export default QuestionsTab;
