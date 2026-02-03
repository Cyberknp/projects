
export interface Guide {
  id: string;
  name: string;
  age: number;
  location: string;
  avatar: string;
  experienceTags: string[];
  bio: string;
  healingStory: string;
  rating: number;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface MatchingResult {
  suggestedGuideIds: string[];
  reasoning: string;
  comfortingWords: string;
}
