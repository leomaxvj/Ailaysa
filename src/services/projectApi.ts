import { Project, ProjectFile } from '../types';
import { INITIAL_PROJECTS } from '../constants/mockData';

// Simulated database in memory for testing
let mockProjects: Project[] = [...INITIAL_PROJECTS];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const projectApi = {
  async getProjects(): Promise<Project[]> {
    await delay(800); // simulate network lag
    return [...mockProjects];
  },

  async createProject(name: string, sourceLang: string, targetLang: string, files: Omit<ProjectFile, 'progress' | 'status'>[]): Promise<Project> {
    await delay(1200);
    const newProject: Project = {
      id: `p-${Date.now()}`,
      name,
      sourceLang,
      targetLang,
      createdOn: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
      files: files.map((file, idx) => ({
        ...file,
        progress: idx === 0 ? 35 : 100, // Make first file uploading, rest completed
        status: idx === 0 ? 'uploading' : 'completed',
      })),
    };
    mockProjects.unshift(newProject);
    return newProject;
  },

  async deleteProjectFile(projectId: string, fileId: string): Promise<boolean> {
    await delay(500);
    const project = mockProjects.find((p) => p.id === projectId);
    if (project) {
      project.files = project.files.filter((f) => f.id !== fileId);
      return true;
    }
    return false;
  },
};
