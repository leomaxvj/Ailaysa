import { GlossaryTerm } from '../types';
import { INITIAL_GLOSSARY } from '../constants/mockData';

let mockGlossary: GlossaryTerm[] = [...INITIAL_GLOSSARY];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const glossaryApi = {
  async getTerms(): Promise<GlossaryTerm[]> {
    await delay(500);
    return [...mockGlossary];
  },

  async addTerm(sourceWord: string, targetWord: string, partOfSpeech: string): Promise<GlossaryTerm> {
    await delay(400);
    const newTerm: GlossaryTerm = {
      id: `g-${Date.now()}`,
      sourceWord,
      targetWord,
      partOfSpeech,
    };
    mockGlossary.push(newTerm);
    return newTerm;
  },

  async deleteTerm(id: string): Promise<boolean> {
    await delay(300);
    mockGlossary = mockGlossary.filter(t => t.id !== id);
    return true;
  },

  async importTerms(file: File): Promise<GlossaryTerm[]> {
    await delay(1500); // Simulate Excel parsing
    const parsedTerms: GlossaryTerm[] = [
      { id: `g-imp-1`, sourceWord: 'Deposit', targetWord: 'வைப்பு', partOfSpeech: 'Noun' },
      { id: `g-imp-2`, sourceWord: 'Withdraw', targetWord: 'திரும்பப் பெறுதல்', partOfSpeech: 'Verb' },
      { id: `g-imp-3`, sourceWord: 'Interest', targetWord: 'வட்டி', partOfSpeech: 'Noun' },
    ];
    mockGlossary.push(...parsedTerms);
    return parsedTerms;
  }
};
