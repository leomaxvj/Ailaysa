import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectFile } from '../../types';
import { INITIAL_PROJECTS } from '../../constants/mockData';

interface ProjectState {
  projects: Project[];
  currentProject: Project | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: INITIAL_PROJECTS,
  currentProject: null,
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.unshift(action.payload);
    },
    setCurrentProject: (state, action: PayloadAction<Project | null>) => {
      state.currentProject = action.payload;
    },
    addFileToProject: (state, action: PayloadAction<{ projectId: string; file: ProjectFile }>) => {
      const project = state.projects.find(p => p.id === action.payload.projectId);
      if (project) {
        project.files.push(action.payload.file);
      }
      if (state.currentProject && state.currentProject.id === action.payload.projectId) {
        state.currentProject.files.push(action.payload.file);
      }
    },
    updateFileProgress: (state, action: PayloadAction<{ projectId: string; fileId: string; progress: number }>) => {
      const project = state.projects.find(p => p.id === action.payload.projectId);
      if (project) {
        const file = project.files.find(f => f.id === action.payload.fileId);
        if (file) {
          file.progress = action.payload.progress;
          if (action.payload.progress >= 100) {
            file.status = 'completed';
          }
        }
      }
      if (state.currentProject && state.currentProject.id === action.payload.projectId) {
        const file = state.currentProject.files.find(f => f.id === action.payload.fileId);
        if (file) {
          file.progress = action.payload.progress;
          if (action.payload.progress >= 100) {
            file.status = 'completed';
          }
        }
      }
    },
    deleteProjectFile: (state, action: PayloadAction<{ projectId: string; fileId: string }>) => {
      const project = state.projects.find(p => p.id === action.payload.projectId);
      if (project) {
        project.files = project.files.filter(f => f.id !== action.payload.fileId);
      }
      if (state.currentProject && state.currentProject.id === action.payload.projectId) {
        state.currentProject.files = state.currentProject.files.filter(f => f.id !== action.payload.fileId);
      }
    },
    updateProjectTargetLang: (state, action: PayloadAction<{ projectId: string; targetLang: string }>) => {
      const { projectId, targetLang } = action.payload;
      const project = state.projects.find(p => p.id === projectId);
      if (project) {
        project.targetLang = targetLang;
      }
      if (state.currentProject && state.currentProject.id === projectId) {
        state.currentProject.targetLang = targetLang;
      }
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
  setProjects,
  addProject,
  setCurrentProject,
  addFileToProject,
  updateFileProgress,
  deleteProjectFile,
  updateProjectTargetLang,
  setLoading,
  setError,
} = projectSlice.actions;

export default projectSlice.reducer;
