
export enum TabType {
  PLAN = 'PLAN',
  GUIDE = 'GUIDE',
  WALLET = 'WALLET',
  LISTS = 'LISTS',
  INFO = 'INFO'
}

export interface Expense {
  id: string;
  item: string;
  jpyAmount: number;
  twdAmount: number;
  timestamp: number;
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface NoteItem {
  id: string;
  content: string;
  timestamp: number;
}

export interface ItineraryItem {
  time: string;
  activity: string;
  note?: string;
  isImportant?: boolean;
  mapUrl?: string;
  blogUrl?: string;
}

export interface DailyItinerary {
  day: string;
  date: string;
  hotel: string;
  items: ItineraryItem[];
}
