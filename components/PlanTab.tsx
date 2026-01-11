
import React, { useState } from 'react';
import { ITINERARY } from '../constants';

const PlanTab: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="space-y-6 pb-4">
      {/* Day Selector */}
      <div className="flex space-x-3 overflow-x-auto hide-scrollbar py-2 px-1">
        {ITINERARY.map((day, idx) => (
          <button
            key={day.day}
            onClick={() => setSelectedDay(idx)}
            className={`flex-shrink-0 w-14 h-16 rounded-2xl flex flex-col items-center justify-center transition-all ${
              selectedDay === idx 
                ? 'bg-[#008080] text-white shadow-md' 
                : 'bg-white text-gray-500 border border-gray-100'
            }`}
          >
            <span className="text-xs font-bold">{day.day}</span>
            <span className="text-[10px]">{day.date}</span>
          </button>
        ))}
      </div>

      {/* Hotel Banner */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex items-center space-x-4">
        <div className="bg-[#E0F2F1] p-3 rounded-xl text-[#008080]">
          <i className="fa-solid fa-hotel text-xl"></i>
        </div>
        <div>
          <p className="text-[10px] text-gray-400 font-medium">宿泊飯店</p>
          <h3 className="text-sm font-bold text-gray-700">{ITINERARY[selectedDay].hotel}</h3>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E0F2F1]">
        {ITINERARY[selectedDay].items.map((item, idx) => (
          <div key={idx} className="relative">
            {/* Timeline Dot */}
            <div className={`absolute -left-[1.35rem] top-1 w-3 h-3 rounded-full border-2 border-white ${
              item.isImportant ? 'bg-orange-400 ring-4 ring-orange-100' : 'bg-[#008080]'
            }`}></div>
            
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 ml-2">
              <div className="flex justify-between items-start mb-1">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-lg ${
                  item.isImportant ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'
                }`}>
                  {item.time}
                </span>
              </div>
              <h4 className={`text-sm font-bold mt-1 ${item.isImportant ? 'text-[#008080]' : 'text-gray-700'}`}>
                {item.activity}
              </h4>
              {item.note && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.note}</p>}
              
              {(item.mapUrl || item.blogUrl) && (
                <div className="flex space-x-2 mt-3 pt-3 border-t border-gray-50">
                  {item.mapUrl && (
                    <a 
                      href={item.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] flex items-center bg-[#F1F8E9] text-green-700 px-3 py-1.5 rounded-full font-bold"
                    >
                      <i className="fa-solid fa-location-dot mr-1"></i> Google Maps
                    </a>
                  )}
                  {item.blogUrl && (
                    <a 
                      href={item.blogUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] flex items-center bg-[#E3F2FD] text-blue-700 px-3 py-1.5 rounded-full font-bold"
                    >
                      <i className="fa-solid fa-utensils mr-1"></i> 查看食記
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanTab;
