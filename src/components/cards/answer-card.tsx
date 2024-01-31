import React from 'react';

interface AnswerProps {
  _id: number;
  author: { _id: number; name: string; picture: string };
  question: { _id: number; title: string };
  content: string;
  upvotes: string[];
  createdAt: Date;
}

const AnswerCard = ({
  _id,
  author,
  question,
  content,
  upvotes,
  createdAt,
}: AnswerProps) => {
  return <div>AnswerCard</div>;
};

export default AnswerCard;
