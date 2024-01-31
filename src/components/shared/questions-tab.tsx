import { getUserQuestions } from '@/lib/actions/user.action';
import { SearchParamsProps } from '@/types';
import QuestionCard from '../cards/question-card';

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const QuestionsTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserQuestions({ userId, page: 1 });

  return (
    <>
      {result.questions.map((question) => (
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
    </>
  );
};

export default QuestionsTab;
