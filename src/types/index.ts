export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  date: string;
  size: string;
  progress: number;
  status: 'uploading' | 'completed' | 'failed';
  content?: string;
}

export interface Project {
  id: string;
  name: string;
  sourceLang: string;
  targetLang: string;
  createdOn: string;
  files: ProjectFile[];
}

export interface GlossaryTerm {
  id: string;
  sourceWord: string;
  targetWord: string;
  partOfSpeech: string;
}

export interface TranslationExample {
  id: string;
  sourceExample: string;
  targetExample: string;
}

export interface TranslationSegment {
  id: string;
  sourceText: string;
  targetText: string;
  isCompleted: boolean;
  isFlagged: boolean;
}

export interface TranslationFile {
  id: string;
  name: string;
  segments: TranslationSegment[];
  progress: number;
}
