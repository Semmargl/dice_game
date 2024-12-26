import { create } from 'zustand';

interface GameState {
  threshold: number;
  isGreater: boolean;
  roll: number | null;
  history: {roll: number, threshold: number, isGreater: boolean, timestamp: number}[];
  setThreshold: (value: number) => void;
  setIsGreater: (value: boolean) => void;
  playGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  threshold: 50,
  isGreater: true,
  roll: null,
  history: [],
  setThreshold: (value) => set({ threshold: value }),
  setIsGreater: (value) => set({ isGreater: value }),
  playGame: () =>
    set((state) => {
      const roll = Math.floor(Math.random() * 100) + 1;
      const newEntry = { roll, isGreater: state.isGreater, threshold: state.threshold, timestamp: Date.now() };
      const history = [newEntry, ...state.history].slice(0, 10);
      return { roll, history };
    }),
}));