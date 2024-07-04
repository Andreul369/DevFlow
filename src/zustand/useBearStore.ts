import { getAnswers } from '@/lib/actions/answer.action';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// the store itself does not need any change
export const useBearStore = create(
  persist(
    (set, get) => ({
      allAnswers: [],
    }),
    {
      name: 'food-storage',
    }
  )
);
