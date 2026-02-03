
import React from 'react';
import { Guide } from '../types';
import { ICONS } from '../constants';

interface GuideCardProps {
  guide: Guide;
  onSelect: (guide: Guide) => void;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-3xl p-6 shadow-sm border border-matu-sand hover:shadow-md transition-all group cursor-pointer overflow-hidden relative"
      onClick={() => onSelect(guide)}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <ICONS.Quote className="w-12 h-12" />
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={guide.avatar} 
          alt={guide.name} 
          className="w-16 h-16 rounded-2xl object-cover ring-2 ring-matu-sand"
        />
        <div>
          <h3 className="text-lg font-serif font-bold text-matu-deep">{guide.name}, {guide.age}</h3>
          <p className="text-xs text-matu-sage flex items-center">
            <ICONS.Compass className="w-3 h-3 mr-1" /> {guide.location}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {guide.experienceTags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-matu-cream text-matu-deep text-[10px] font-bold rounded-full uppercase tracking-wider border border-matu-sand">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-600 line-clamp-3 italic mb-6">
        "{guide.bio}"
      </p>

      <button className="w-full bg-matu-sand text-matu-deep py-2 rounded-xl text-sm font-semibold group-hover:bg-matu-sage group-hover:text-white transition-colors flex items-center justify-center space-x-2">
        <span>View My Story</span>
        <ICONS.Heart className="w-4 h-4" />
      </button>
    </div>
  );
};

export default GuideCard;
