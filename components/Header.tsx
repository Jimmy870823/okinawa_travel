import React from 'react';
import { Type } from 'lucide-react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  fontSize: 'small' | 'medium' | 'large';
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, fontSize, setFontSize }) => {
  const getTitle = () => {
    switch (activeTab) {
      case TabType.PLAN: return '行程規劃';
      case TabType.GUIDE: return '深度導覽';
      case TabType.WALLET: return '記帳工具';
      case TabType.LISTS: return '行前清單';
      case TabType.INFO: return '實用資訊';
      default: return 'Okinawa Trip';
    }
  };

  const getSubTitle = () => {
    switch (activeTab) {
      case TabType.PLAN: return '01/15 - 01/19 沖繩海島行';
      case TabType.GUIDE: return '歷史與文化的深度對話';
      case TabType.WALLET: return '預算管理與匯率換算';
      case TabType.LISTS: return '別忘了帶上最重要的東西';
      case TabType.INFO: return '應急資訊與費用明細';
      default: return '';
    }
  };

  return (
    <header className="bg-gradient-to-r from-[#008080] to-[#20B2AA] text-white p-6 rounded-b-[2.5rem] shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{getTitle()}</h1>
          <p className="text-sm opacity-80 mt-1">{getSubTitle()}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-white/20 p-1 rounded-xl backdrop-blur-sm">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`p-2 rounded-lg transition-all ${fontSize === size
                  ? 'bg-white text-[#008080] shadow-sm'
                  : 'text-white hover:bg-white/10'
                  }`}
                title={`Font Size: ${size}`}
              >
                <Type size={size === 'small' ? 14 : size === 'medium' ? 18 : 22} />
              </button>
            ))}
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-umbrella-beach text-lg"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
