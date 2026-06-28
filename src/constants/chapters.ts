export interface ChapterInfo {
  id: string;
  name: string;
  page: number;
  checked: boolean;
  isDoc?: boolean;
}

export const BOOK_CHAPTERS: ChapterInfo[] = [
  { id: 'ch-1', name: 'Title', page: 3, checked: true },
  { id: 'ch-2', name: 'Preface', page: 6, checked: true },
  { id: 'ch-3', name: 'Introduction', page: 8, checked: true },
  { id: 'ch-4', name: 'The Beginning of the Stories', page: 11, checked: true },
  { id: 'ch-5', name: '‘Doctor, Doctor’', page: 13, checked: true },
  { id: 'ch-6', name: 'Kavery and the Thief', page: 21, checked: false, isDoc: true },
  { id: 'ch-7', name: 'Who Was the Happiest of Them All?', page: 28, checked: false, isDoc: true },
  { id: 'ch-8', name: 'The Enchanted Scorpions', page: 34, checked: false, isDoc: true },
  { id: 'ch-9', name: 'The Horse Trap', page: 40, checked: false, isDoc: true },
  { id: 'ch-10', name: 'A Treasure for Ramu', page: 45, checked: false, isDoc: true },
  { id: 'ch-11', name: 'The Donkey and the Stick', page: 50, checked: false, isDoc: true },
  { id: 'ch-12', name: '‘What’s in It for Me?’', page: 54, checked: false, isDoc: true },
  { id: 'ch-13', name: 'The Princess’s New Clothes', page: 60, checked: false, isDoc: true },
  { id: 'ch-14', name: 'The Story of Paan', page: 65, checked: false, isDoc: true },
  { id: 'ch-15', name: 'Payasam for a Bear', page: 70, checked: false, isDoc: true },
  { id: 'ch-16', name: 'Fire on the Beard', page: 77, checked: false, isDoc: true },
  { id: 'ch-17', name: 'The Way You Look at It', page: 83, checked: false, isDoc: true },
  { id: 'ch-18', name: 'Roopa’s Great Escape', page: 88, checked: false, isDoc: true },
  { id: 'ch-19', name: 'Five Spoons of Salt', page: 96, checked: false, isDoc: true },
  { id: 'ch-20', name: 'How the Seasons Got Their Share', page: 102, checked: false, isDoc: true },
  { id: 'ch-21', name: 'The Island of Statues', page: 107, checked: false, isDoc: true },
  { id: 'ch-22', name: 'The Kingdom of Fools', page: 113, checked: false, isDoc: true },
  { id: 'ch-23', name: 'The Story of Silk', page: 119, checked: false, isDoc: true },
  { id: 'ch-24', name: 'When Yama Called', page: 124, checked: false, isDoc: true },
  { id: 'ch-25', name: 'The Unending Story', page: 129, checked: false, isDoc: true },
];
