
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
      const currentChecks = JSON.parse(savedChecks);
      const initialItems = [
        { id: '1', text: '護照 (有效期需六個月以上)', completed: false },
        { id: '2', text: '台灣駕照正本+日文譯本 (羊已準備；禮拜三若有時間也換個譯本)', completed: false },
        { id: '3', text: '網卡*6 (Bobo已準備)', completed: false },
        { id: '4', text: '日幣現金 (需要提領 - 羊、Bobo、蓉)', completed: false },
        { id: '5', text: '暈船藥、暈車藥 (賞鯨必備)', completed: false },
        { id: '6', text: '相機+電池*2', completed: false },
        { id: '7', text: '充電器 / 行動電源', completed: false },
        { id: '8', text: '長袖*4、睡衣 (T 恤、大學 T、薄針織衫。建議採「洋蔥式穿法」)', completed: false },
        { id: '9', text: '外套*1 (「防風外套」或「輕羽絨」)', completed: false },
        { id: '10', text: '長褲or裙子*4 (建議最多3件裙子，第三天賞鯨不建議穿裙子)', completed: false },
        { id: '11', text: '布鞋*1', completed: false },
        { id: '12', text: '襪子*4', completed: false },
        { id: '13', text: '內衣褲*4', completed: false },
        { id: '14', text: '拖鞋or涼鞋 (海灘/瀨長島必備)', completed: false },
        { id: '15', text: '泳具 (泡戶外 Spa 用)', completed: false },
        { id: '16', text: '穿搭配件 (帽子、太陽眼鏡 - 沖繩紫外線一年四季都很強)', completed: false },
        { id: '17', text: '行動電源 (不可拖運，需有標示；限100Wh/20,000mAh；置於座椅前方收納)', completed: false },
        { id: '18', text: '耳機', completed: false },
        { id: '19', text: '頸枕 (開車時間較長，可自行評估)', completed: false },
        { id: '20', text: '護唇膏、乳液、保濕', completed: false },
        { id: '21', text: '防曬', completed: false },
        { id: '22', text: '塑膠袋 (裝濕衣服)', completed: false },
        { id: '23', text: '防水袋/夾鏈袋 (賞鯨防浪花噴濕手機/相機)', completed: false },
        { id: '24', text: 'Google 翻譯 APP', completed: false },
        { id: '25', text: '卸妝乳', completed: false },
        { id: '26', text: '隱形眼鏡', completed: false },
        { id: '27', text: '電動牙刷', completed: false },
        { id: '28', text: '梳子', completed: false },
        { id: '29', text: '摺疊傘', completed: false }
      ];

      // Merge: Add items that don't exist in current state
      const merged = [...currentChecks];
      initialItems.forEach(initItem => {
        const itemExists = currentChecks.some((c: any) =>
          c.text.split('(')[0].trim() === initItem.text.split('(')[0].trim()
        );
        if (!itemExists) {
          merged.push(initItem);
        }
      });

      if (merged.length !== currentChecks.length) {
        setChecks(merged);
        localStorage.setItem('trip_checklist', JSON.stringify(merged));
      } else {
        setChecks(currentChecks);
      }
    } else {
      const initial = [
        { id: '1', text: '護照 (有效期需六個月以上)', completed: false },
        { id: '2', text: '台灣駕照正本+日文譯本 (羊已準備；禮拜三若有時間也換個譯本)', completed: false },
        { id: '3', text: '網卡*6 (Bobo已準備)', completed: false },
        { id: '4', text: '日幣現金 (需要提領 - 羊、Bobo、蓉)', completed: false },
        { id: '5', text: '暈船藥、暈車藥 (賞鯨必備)', completed: false },
        { id: '6', text: '相機+電池*2', completed: false },
        { id: '7', text: '充電器 / 行動電源', completed: false },
        { id: '8', text: '長袖*4、睡衣 (T 恤、大學 T、薄針織衫。建議採「洋蔥式穿法」)', completed: false },
        { id: '9', text: '外套*1 (「防風外套」或「輕羽絨」)', completed: false },
        { id: '10', text: '長褲or裙子*4 (建議最多3件裙子，第三天賞鯨不建議穿裙子)', completed: false },
        { id: '11', text: '布鞋*1', completed: false },
        { id: '12', text: '襪子*4', completed: false },
        { id: '13', text: '內衣褲*4', completed: false },
        { id: '14', text: '拖鞋or涼鞋 (海灘/瀨長島必備)', completed: false },
        { id: '15', text: '泳具 (泡戶外 Spa 用)', completed: false },
        { id: '16', text: '穿搭配件 (帽子、太陽眼鏡 - 沖繩紫外線一年四季都很強)', completed: false },
        { id: '17', text: '行動電源 (不可拖運，需有標示；限100Wh/20,000mAh；置於座椅前方收納)', completed: false },
        { id: '18', text: '耳機', completed: false },
        { id: '19', text: '頸枕 (開車時間較長，可自行評估)', completed: false },
        { id: '20', text: '護唇膏、乳液、保濕', completed: false },
        { id: '21', text: '防曬', completed: false },
        { id: '22', text: '塑膠袋 (裝濕衣服)', completed: false },
        { id: '23', text: '防水袋/夾鏈袋 (賞鯨防浪花噴濕手機/相機)', completed: false },
        { id: '24', text: 'Google 翻譯 APP', completed: false },
        { id: '25', text: '卸妝乳', completed: false },
        { id: '26', text: '隱形眼鏡', completed: false },
        { id: '27', text: '電動牙刷', completed: false },
        { id: '28', text: '梳子', completed: false },
        { id: '29', text: '摺疊傘', completed: false }
      ];
      setChecks(initial);
      localStorage.setItem('trip_checklist', JSON.stringify(initial));
    }

    if (savedNotes) {
      const currentNotes = JSON.parse(savedNotes);
      const initialNotes = [
        { id: 'n5', content: '入境申請 https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/', timestamp: Date.now() + 1000 },
        { id: 'n4', content: '關於接駁的注意事項\n接駁流程：\n1️⃣ 取行李並出關後\n2️⃣ 透過 Line 或 WhatsApp 通知我們（準備前往接駁點）\n3️⃣ 前往那霸機場「國內線 1樓・14號C接駁處」\n4️⃣ 抵達後再通知一次我們', timestamp: Date.now() },
        { id: 'n3', content: '琉球的牛 停車位置參考 https://www.u-shi.net/onna.html', timestamp: Date.now() - 1000 },
        { id: 'n2', content: '沖繩行腳租車 接駁點位置 https://youtu.be/iAl8v1AAcjM', timestamp: Date.now() - 2000 },
        { id: 'n1', content: '沖繩行腳租車 取還車&保險教學 https://www.youtube.com/watch?v=XfESZVyiAsk', timestamp: Date.now() - 3000 }
      ];

      // Merge: Add if not exists
      const mergedNotes = [...currentNotes];
      initialNotes.forEach(initNote => {
        const noteExists = currentNotes.some((n: any) => n.content.includes(initNote.id) || n.content === initNote.content);
        if (!noteExists) {
          mergedNotes.unshift(initNote);
        }
      });

      if (mergedNotes.length !== currentNotes.length) {
        setNotes(mergedNotes);
        localStorage.setItem('trip_notes', JSON.stringify(mergedNotes));
      } else {
        setNotes(currentNotes);
      }
    } else {
      const initialNotes = [
        { id: 'n5', content: '入境申請 https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/', timestamp: Date.now() + 1000 },
        { id: 'n4', content: '關於接駁的注意事項\n接駁流程：\n1️⃣ 取行李並出關後\n2️⃣ 透過 Line 或 WhatsApp 通知我們（準備前往接駁點）\n3️⃣ 前往那霸機場「國內線 1樓・14號C接駁處」\n4️⃣ 抵達後再通知一次我們', timestamp: Date.now() },
        { id: 'n3', content: '琉球的牛 停車位置參考 https://www.u-shi.net/onna.html', timestamp: Date.now() - 1000 },
        { id: 'n2', content: '沖繩行腳租車 接駁點位置 https://youtu.be/iAl8v1AAcjM', timestamp: Date.now() - 2000 },
        { id: 'n1', content: '沖繩行腳租車 取還車&保險教學 https://www.youtube.com/watch?v=XfESZVyiAsk', timestamp: Date.now() - 3000 }
      ];
      setNotes(initialNotes);
      localStorage.setItem('trip_notes', JSON.stringify(initialNotes));
    }
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
