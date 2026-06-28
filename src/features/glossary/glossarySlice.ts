import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlossaryTerm } from '../../types';
import { INITIAL_GLOSSARY } from '../../constants/mockData';

interface GlossaryState {
  terms: GlossaryTerm[];
  searchQuery: string;
  loading: boolean;
  error: string | null;
}

const initialState: GlossaryState = {
  terms: INITIAL_GLOSSARY,
  searchQuery: '',
  loading: false,
  error: null,
};

const glossarySlice = createSlice({
  name: 'glossary',
  initialState,
  reducers: {
    setGlossaryTerms: (state, action: PayloadAction<GlossaryTerm[]>) => {
      state.terms = action.payload;
    },
    addGlossaryTerm: (state, action: PayloadAction<GlossaryTerm>) => {
      state.terms.push(action.payload);
    },
    addMultipleGlossaryTerms: (state, action: PayloadAction<GlossaryTerm[]>) => {
      state.terms.push(...action.payload);
    },
    deleteGlossaryTerm: (state, action: PayloadAction<string>) => {
      state.terms = state.terms.filter(t => t.id !== action.payload);
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
  setGlossaryTerms,
  addGlossaryTerm,
  addMultipleGlossaryTerms,
  deleteGlossaryTerm,
  setSearchQuery,
  setLoading,
  setError,
} = glossarySlice.actions;

export default glossarySlice.reducer;
