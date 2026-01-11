
import React, { useState, useEffect } from 'react';
import { ChecklistItem, NoteItem } from '../types';

const ListsTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'check' | 'notes'>('check');
  const [checks, setChecks] = useState<ChecklistItem[]>([]);
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedChecks = localStorage.getItem('trip_checklist');
    const savedNotes = localStorage.getItem('trip_notes');
    
    if (savedChecks) {
      setChecks(JSON.parse(savedChecks));
    } else {
      const initial = [
        { id: '1', text: '護照 (有效期需六個月以上)', completed: false },
        { id: '2', text: '國際駕照 (開車組必備)', completed: false },
        { id: '3', text: '網卡 / Wi-Fi 分享器', completed: false },
        { id: '4', text: '日幣現金 (租車補費與市場用)', completed: false },
        { id: '5', text: '拖鞋 (海灘/瀨長島必備)', completed: false },
        { id: '6', text: '暈船藥 (賞鯨必備！)', completed: false },
        { id: '7', text: '泳具 (泡 Spa / 按摩浴缸用)', completed: false },
        { id: '8', text: '充電器 / 行動電源', completed: false }
      ];
      setChecks(initial);
      localStorage.setItem('trip_checklist', JSON.stringify(initial));
    }
    
    if (savedNotes) setNotes(JSON.parse(savedNotes));
  }, []);

  const saveChecks = (newItems: ChecklistItem[]) => {
    setChecks(newItems);
    localStorage.setItem('trip_checklist', JSON.stringify(newItems));
  };

  const saveNotes = (newItems: NoteItem[]) => {
    setNotes(newItems);
    localStorage.setItem('trip_notes', JSON.stringify(newItems));
  };

  const toggleCheck = (id: string) => {
    saveChecks(checks.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const addItem = () => {
    if (!inputValue) return;
    if (activeSubTab === 'check') {
      saveChecks([...checks, { id: Date.now().toString(), text: inputValue, completed: false }]);
    } else {
      saveNotes([{ id: Date.now().toString(), content: inputValue, timestamp: Date.now() }, ...notes]);
    }
    setInputValue('');
  };

  const deleteNote = (id: string) => {
    saveNotes(notes.filter(n => n.id !== id));
  };

  const renderContentWithLinks = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs text-[#008080] bg-[#E0F2F1] px-2 py-1 rounded mt-1 font-bold">
            <i className="fa-solid fa-link mr-1"></i> 開啟連結
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="space-y-6 pb-4">
      {/* Sub Tabs */}
      <div className="bg-white rounded-2xl p-1 flex shadow-sm">
        <button 
          onClick={() => setActiveSubTab('check')}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeSubTab === 'check' ? 'bg-[#008080] text-white shadow-sm' : 'text-gray-400'}`}
        >
          備案清單
        </button>
        <button 
          onClick={() => setActiveSubTab('notes')}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeSubTab === 'notes' ? 'bg-[#008080] text-white shadow-sm' : 'text-gray-400'}`}
        >
          個人筆記
        </button>
      </div>

      {/* Input */}
      <div className="flex space-x-2">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={activeSubTab === 'check' ? "新增待辦項目..." : "輸入筆記或網址..."}
          className="flex-grow bg-white border border-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#008080] shadow-sm"
        />
        <button 
          onClick={addItem}
          className="bg-[#008080] text-white px-6 rounded-2xl font-bold active:scale-95 transition-transform shadow-sm"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      {/* List Container */}
      <div className="space-y-3">
        {activeSubTab === 'check' ? (
          checks.map(item => (
            <div 
              key={item.id} 
              onClick={() => toggleCheck(item.id)}
              className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex items-center space-x-4 active:bg-gray-50 transition-colors"
            >
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${item.completed ? 'bg-[#008080] border-[#008080]' : 'border-gray-200'}`}>
                {item.completed && <i className="fa-solid fa-check text-white text-xs"></i>}
              </div>
              <span className={`text-sm ${item.completed ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'}`}>
                {item.text}
              </span>
            </div>
          ))
        ) : (
          notes.map(note => (
            <div key={note.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] text-gray-400">
                  {new Date(note.timestamp).toLocaleDateString()} {new Date(note.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                <button onClick={() => deleteNote(note.id)} className="text-gray-300 hover:text-red-400">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed break-all">
                {renderContentWithLinks(note.content)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListsTab;
