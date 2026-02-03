
import React from 'react';
import { Guide } from './types';

export const MOCK_GUIDES: Guide[] = [
  {
    id: '1',
    name: 'Eleanor Vance',
    age: 58,
    location: 'Portland, OR',
    avatar: 'https://picsum.photos/seed/eleanor/200/200',
    experienceTags: ['Grief & Loss', 'Late Career Transition', 'Empty Nest'],
    bio: 'A retired educator who found new purpose after a sudden loss. I believe healing is not linear, but possible with patience.',
    healingStory: 'After losing my husband of 30 years, I felt adrift. Through community and gardening, I learned to weave grief into a new tapestry of life.',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Marcus Chen',
    age: 45,
    location: 'Vancouver, BC',
    avatar: 'https://picsum.photos/seed/marcus/200/200',
    experienceTags: ['Burnout Recovery', 'Divorce', 'Mindfulness'],
    bio: 'Former tech executive who rebuilt life after severe burnout and divorce. Focusing now on intentional living and emotional resilience.',
    healingStory: 'The pressure to succeed almost broke me. It took losing everything to find my true self. I guide those feeling overwhelmed by the noise of achievement.',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    age: 62,
    location: 'Austin, TX',
    avatar: 'https://picsum.photos/seed/sarah/200/200',
    experienceTags: ['Chronic Illness', 'Caregiving', 'Spirituality'],
    bio: 'A long-term survivor of autoimmune challenges. I help others navigate the frustration of physical limitations while maintaining joy.',
    healingStory: 'Living with pain taught me that my worth isn\'t tied to my productivity. I found peace in the pauses.',
    rating: 5.0
  },
  {
    id: '4',
    name: 'David Okafor',
    age: 52,
    location: 'London, UK',
    avatar: 'https://picsum.photos/seed/david/200/200',
    experienceTags: ['Addiction Recovery', 'Family Estrangement', 'Legacy'],
    bio: 'Clean for 15 years, I work with those looking to repair relationships and build a stable foundation for their future.',
    healingStory: 'I spent years hiding. When I finally stepped into the light, I realized my past wasn\'t a shackle, but a school. I help others graduate from their pain.',
    rating: 4.9
  }
];

export const ICONS = {
  Heart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  ),
  Search: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  User: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Feather: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
  ),
  Compass: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  ),
  Quote: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
  ),
};
