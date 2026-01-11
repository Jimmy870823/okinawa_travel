
import React from 'react';
import { TabType } from '../types';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { type: TabType.PLAN, icon: 'fa-calendar-days', label: '行程' },
    { type: TabType.GUIDE, icon: 'fa-book-open', label: '導覽' },
    { type: TabType.WALLET, icon: 'fa-wallet', label: '錢包' },
    { type: TabType.LISTS, icon: 'fa-clipboard-list', label: '清單' },
    { type: TabType.INFO, icon: 'fa-info-circle', label: '資訊' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center px-4 py-2 safe-bottom z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => (
        <button
          key={item.type}
          onClick={() => setActiveTab(item.type)}
          className={`flex flex-col items-center py-1 transition-all duration-300 w-16 ${
            activeTab === item.type ? 'text-[#008080] scale-110' : 'text-gray-400'
          }`}
        >
          <i className={`fa-solid ${item.icon} text-xl`}></i>
          <span className="text-[10px] mt-1 font-medium">{item.label}</span>
          {activeTab === item.type && (
            <div className="w-1.5 h-1.5 bg-[#008080] rounded-full mt-0.5 animate-pulse"></div>
          )}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
