import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// the store itself does not need any change
export const useBearStore = create(
  persist(
    (set, get) => ({
      allAnswers: [],
      // addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage',
    }
  )
);
