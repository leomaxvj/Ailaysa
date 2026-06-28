import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TranslationExample } from '../../types';
import { INITIAL_EXAMPLES } from '../../constants/mockData';

interface ExampleState {
  examples: TranslationExample[];
  searchQuery: string;
  loading: boolean;
  error: string | null;
}

const initialState: ExampleState = {
  examples: INITIAL_EXAMPLES,
  searchQuery: '',
  loading: false,
  error: null,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setExamples: (state, action: PayloadAction<TranslationExample[]>) => {
      state.examples = action.payload;
    },
    addExample: (state, action: PayloadAction<TranslationExample>) => {
      state.examples.push(action.payload);
    },
    addMultipleExamples: (state, action: PayloadAction<TranslationExample[]>) => {
      state.examples.push(...action.payload);
    },
    deleteExample: (state, action: PayloadAction<string>) => {
      state.examples = state.examples.filter(e => e.id !== action.payload);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setExamples,
  addExample,
  addMultipleExamples,
  deleteExample,
  setSearchQuery,
  setLoading,
  setError,
} = exampleSlice.actions;

export default exampleSlice.reducer;
