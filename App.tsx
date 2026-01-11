
import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import Navigation from './components/Navigation';
import Header from './components/Header';
import PlanTab from './components/PlanTab';
import GuideTab from './components/GuideTab';
import WalletTab from './components/WalletTab';
import ListsTab from './components/ListsTab';
import InfoTab from './components/InfoTab';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.PLAN);

  // Initialize scrolling and state
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case TabType.PLAN:
        return <PlanTab />;
      case TabType.GUIDE:
        return <GuideTab />;
      case TabType.WALLET:
        return <WalletTab />;
      case TabType.LISTS:
        return <ListsTab />;
      case TabType.INFO:
        return <InfoTab />;
      default:
        return <PlanTab />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <Header activeTab={activeTab} />
      
      <main className="flex-grow px-4 py-6 max-w-md mx-auto w-full">
        <div className="animate-in fade-in duration-500">
          {renderContent()}
        </div>
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
