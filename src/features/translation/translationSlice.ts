import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { TranslationSegment, TranslationFile, ProjectFile } from '../../types';
import { translateTextFree, translateText, splitIntoSentences, PAGE_CONTENTS } from '../../utils/translator';
import { BOOK_CHAPTERS } from '../../constants/chapters';

interface TranslationState {
  files: TranslationFile[];
  activeFileId: string | null;
  segments: TranslationSegment[];
  activeSegmentIndex: number;
  activePage: number;
  totalPages: number;
  targetLanguage: string;
  loading: boolean;
  error: string | null;
}

const getParagraphsForPage = (page: number): string[] => {
  if (PAGE_CONTENTS[page]) {
    return PAGE_CONTENTS[page];
  }
  
  const chapter = BOOK_CHAPTERS.reduce((prev, curr) => {
    if (page >= curr.page) return curr;
    return prev;
  }, BOOK_CHAPTERS[0]);

  return [
    `${chapter.name} - Page ${page}`,
    `Continuing story content of chapter "${chapter.name}" on page ${page}. The children gathered on the floor listening to Ajji's magic stories.`,
    `They enjoyed learning lessons of kindness, wit, and wisdom during these summer holidays.`
  ];
};

const generateSegmentsForPage = (page: number, targetLang: string): TranslationSegment[] => {
  const paragraphs = getParagraphsForPage(page);
  return paragraphs.map((para, idx) => ({
    id: `s-page-${page}-${idx}`,
    sourceText: para,
    targetText: translateText(para, targetLang), // Initial synchronous fallback
    isCompleted: false,
    isFlagged: false,
  }));
};

export const fetchPageTranslations = createAsyncThunk(
  'translation/fetchPageTranslations',
  async ({ page, targetLang }: { page: number; targetLang: string }) => {
    const paragraphs = getParagraphsForPage(page);
    const promises = paragraphs.map(async (para, idx) => {
      const translated = await translateTextFree(para, targetLang);
      return {
        id: `s-page-${page}-${idx}`,
        sourceText: para,
        targetText: translated,
        isCompleted: false,
        isFlagged: false,
      };
    });
    return await Promise.all(promises);
  }
);

const initialState: TranslationState = {
  files: [],
  activeFileId: null,
  segments: generateSegmentsForPage(11, 'ta'), // Default starting on page 11 (Chapter 1)
  activeSegmentIndex: 0,
  activePage: 11,
  totalPages: 136,
  targetLanguage: 'ta',
  loading: false,
  error: null,
};

const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<TranslationFile[]>) => {
      state.files = action.payload;
    },
    setActiveFileId: (state, action: PayloadAction<string>) => {
      state.activeFileId = action.payload;
    },
    setActivePage: (state, action: PayloadAction<number>) => {
      const page = Math.min(state.totalPages, Math.max(1, action.payload));
      state.activePage = page;
      state.activeSegmentIndex = 0;
    },
    changeTargetLanguage: (state, action: PayloadAction<string>) => {
      state.targetLanguage = action.payload;
      state.activeSegmentIndex = 0;
    },
    setSegments: (state, action: PayloadAction<TranslationSegment[]>) => {
      state.segments = action.payload;
    },
    syncProjectFiles: (
      state,
      action: PayloadAction<{ projectFiles: ProjectFile[]; sourceLang: string; targetLang: string }>
    ) => {
      const { targetLang } = action.payload;
      state.targetLanguage = targetLang;
      state.activeSegmentIndex = 0;
    },
    updateSegmentTargetText: (state, action: PayloadAction<{ id: string; targetText: string }>) => {
      const { id, targetText } = action.payload;
      const segment = state.segments.find(s => s.id === id);
      if (segment) {
        segment.targetText = targetText;
      }
    },
    toggleSegmentCompleted: (state, action: PayloadAction<{ id: string; isCompleted?: boolean }>) => {
      const { id, isCompleted } = action.payload;
      const segment = state.segments.find(s => s.id === id);
      if (segment) {
        segment.isCompleted = isCompleted !== undefined ? isCompleted : !segment.isCompleted;
      }
    },
    toggleSegmentFlagged: (state, action: PayloadAction<{ id: string; isFlagged?: boolean }>) => {
      const { id, isFlagged } = action.payload;
      const segment = state.segments.find(s => s.id === id);
      if (segment) {
        segment.isFlagged = isFlagged !== undefined ? isFlagged : !segment.isFlagged;
      }
    },
    setActiveSegmentIndex: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload < state.segments.length) {
        state.activeSegmentIndex = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageTranslations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPageTranslations.fulfilled, (state, action) => {
        state.loading = false;
        state.segments = action.payload;
      })
      .addCase(fetchPageTranslations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch translations';
      });
  },
});

export const {
  setFiles,
  setActiveFileId,
  setActivePage,
  changeTargetLanguage,
  setSegments,
  syncProjectFiles,
  updateSegmentTargetText,
  toggleSegmentCompleted,
  toggleSegmentFlagged,
  setActiveSegmentIndex,
  setLoading,
  setError,
} = translationSlice.actions;

export default translationSlice.reducer;
