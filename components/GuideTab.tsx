
import React from 'react';
import { GUIDES } from '../constants';

const GuideTab: React.FC = () => {
  return (
    <div className="space-y-8 pb-4">
      {GUIDES.map((guide, idx) => (
        <article key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50">
          <div className="h-48 bg-gray-200 relative">
            <img 
              src={guide.imageUrl} 
              alt={guide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#008080] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Discovery
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{guide.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {guide.description}
            </p>
            
            <div className="bg-[#FDF7F2] p-4 rounded-2xl border-l-4 border-[#E67E22] mb-6">
              <div className="flex items-center text-[#E67E22] font-bold text-xs mb-1">
                <i className="fa-solid fa-lightbulb mr-2"></i> 你知道嗎？
              </div>
              <p className="text-xs text-gray-700">{guide.trivia}</p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100">
               <iframe 
                width="100%" 
                height="180" 
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(guide.osmCoords.split(',')[1])-0.01}%2C${parseFloat(guide.osmCoords.split(',')[0])-0.01}%2C${parseFloat(guide.osmCoords.split(',')[1])+0.01}%2C${parseFloat(guide.osmCoords.split(',')[0])+0.01}&layer=mapnik&marker=${guide.osmCoords}`}
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default GuideTab;
