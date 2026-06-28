import { TranslationExample } from '../types';
import { INITIAL_EXAMPLES } from '../constants/mockData';

let mockExamples: TranslationExample[] = [...INITIAL_EXAMPLES];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const exampleApi = {
  async getExamples(): Promise<TranslationExample[]> {
    await delay(500);
    return [...mockExamples];
  },

  async addExample(sourceExample: string, targetExample: string): Promise<TranslationExample> {
    await delay(400);
    const newExample: TranslationExample = {
      id: `e-${Date.now()}`,
      sourceExample,
      targetExample,
    };
    mockExamples.push(newExample);
    return newExample;
  },

  async deleteExample(id: string): Promise<boolean> {
    await delay(300);
    mockExamples = mockExamples.filter(e => e.id !== id);
    return true;
  },

  async importExamples(file: File): Promise<TranslationExample[]> {
    await delay(1500); // Simulate Excel parsing
    const parsedExamples: TranslationExample[] = [
      {
        id: `e-imp-1`,
        sourceExample: 'Savings help in times of unexpected crisis.',
        targetExample: 'எதிர்பாராத நெருக்கடி காலங்களில் சேமிப்பு உதவுகிறது.',
      },
      {
        id: `e-imp-2`,
        sourceExample: 'A budget tells your money where to go.',
        targetExample: 'ஒரு வரவு செலவுத் திட்டம் உங்கள் பணம் எங்கு செல்ல வேண்டும் என்று சொல்கிறது.',
      },
    ];
    mockExamples.push(...parsedExamples);
    return parsedExamples;
  }
};
