import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isLeftSidebarCollapsed: boolean;
  isRightSidebarCollapsed: boolean;
  isAddGlossaryOpen: boolean;
  isImportGlossaryOpen: boolean;
  isAddExampleOpen: boolean;
  isImportExampleOpen: boolean;
  activeProjectName: string;
}

const initialState: UiState = {
  isLeftSidebarCollapsed: false,
  isRightSidebarCollapsed: false,
  isAddGlossaryOpen: false,
  isImportGlossaryOpen: false,
  isAddExampleOpen: false,
  isImportExampleOpen: false,
  activeProjectName: 'Untitled project',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLeftSidebar: (state) => {
      state.isLeftSidebarCollapsed = !state.isLeftSidebarCollapsed;
    },
    setLeftSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isLeftSidebarCollapsed = action.payload;
    },
    toggleRightSidebar: (state) => {
      state.isRightSidebarCollapsed = !state.isRightSidebarCollapsed;
    },
    setRightSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isRightSidebarCollapsed = action.payload;
    },
    setAddGlossaryOpen: (state, action: PayloadAction<boolean>) => {
      state.isAddGlossaryOpen = action.payload;
    },
    setImportGlossaryOpen: (state, action: PayloadAction<boolean>) => {
      state.isImportGlossaryOpen = action.payload;
    },
    setAddExampleOpen: (state, action: PayloadAction<boolean>) => {
      state.isAddExampleOpen = action.payload;
    },
    setImportExampleOpen: (state, action: PayloadAction<boolean>) => {
      state.isImportExampleOpen = action.payload;
    },
    setActiveProjectName: (state, action: PayloadAction<string>) => {
      state.activeProjectName = action.payload;
    },
  },
});

export const {
  toggleLeftSidebar,
  setLeftSidebarCollapsed,
  toggleRightSidebar,
  setRightSidebarCollapsed,
  setAddGlossaryOpen,
  setImportGlossaryOpen,
  setAddExampleOpen,
  setImportExampleOpen,
  setActiveProjectName,
} = uiSlice.actions;

export default uiSlice.reducer;
