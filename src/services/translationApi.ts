import { TranslationSegment, TranslationFile } from '../types';
import { INITIAL_SEGMENTS } from '../constants/mockData';

let mockFiles: TranslationFile[] = [
  {
    id: 'tf-1',
    name: 'Chapter 1.pdf',
    segments: INITIAL_SEGMENTS,
    progress: 20,
  },
  {
    id: 'tf-2',
    name: 'Chapter 2.pdf',
    segments: [
      { id: 's2-1', sourceText: 'Welcome to another chapter of our financial wellness guide.', targetText: 'எங்கள் நிதி ஆரோக்கிய வழிகாட்டியின் மற்றொரு அத்தியாயத்திற்கு வரவேற்கிறோம்.', isCompleted: true, isFlagged: false },
      { id: 's2-2', sourceText: 'Today we will discuss how to save effectively.', targetText: '', isCompleted: false, isFlagged: false },
    ],
    progress: 50,
  }
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const translationApi = {
  async getFiles(projectId: string): Promise<TranslationFile[]> {
    await delay(600);
    return [...mockFiles];
  },

  async updateSegment(fileId: string, segmentId: string, targetText: string, isCompleted: boolean, isFlagged: boolean): Promise<TranslationSegment> {
    await delay(300);
    const file = mockFiles.find(f => f.id === fileId);
    if (!file) throw new Error('File not found');
    
    const segment = file.segments.find(s => s.id === segmentId);
    if (!segment) throw new Error('Segment not found');
    
    segment.targetText = targetText;
    segment.isCompleted = isCompleted;
    segment.isFlagged = isFlagged;
    
    // Update file progress
    const total = file.segments.length;
    const completedCount = file.segments.filter(s => s.isCompleted).length;
    file.progress = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    
    return { ...segment };
  }
};
