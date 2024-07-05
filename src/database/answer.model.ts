import { Schema, models, model, Document } from 'mongoose';

export interface IAnswer extends Document {
  // _id: Schema.Types.ObjectId;
  author: Schema.Types.ObjectId;
  question: Schema.Types.ObjectId;
  content: string;
  upvotes: Schema.Types.ObjectId[]; // Array of ids of users who upvoted this answer
  downvotes: Schema.Types.ObjectId[];
  createdAt: Date;
}

const AnswerSchema = new Schema<IAnswer>({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  question: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  content: { type: String, required: true },
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});

const Answer = models.Answer || model<IAnswer>('Answer', AnswerSchema);

export default Answer;
