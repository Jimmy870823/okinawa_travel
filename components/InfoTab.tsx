
import React from 'react';
import { COST_SUMMARY, INDIVIDUAL_COSTS } from '../constants';

const InfoTab: React.FC = () => {
  return (
    <div className="space-y-6 pb-4">
      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-3">
        <a href="https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=471000" target="_blank" rel="noopener noreferrer" className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex flex-col items-center">
          <i className="fa-solid fa-cloud-sun text-2xl text-blue-500 mb-2"></i>
          <span className="text-xs font-bold text-blue-700">沖繩氣象廳</span>
        </a>
        <a href="https://www.google.com/search?q=1+jpy+to+twd" target="_blank" rel="noopener noreferrer" className="bg-green-50 p-4 rounded-2xl border border-green-100 flex flex-col items-center">
          <i className="fa-solid fa-chart-line text-2xl text-green-500 mb-2"></i>
          <span className="text-xs font-bold text-green-700">即時匯率</span>
        </a>
      </div>

      {/* Individual Cost Summary */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50">
        <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center">
          <i className="fa-solid fa-users-viewfinder mr-2 text-[#008080]"></i> 個人費用總計 (TWD)
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {INDIVIDUAL_COSTS.map((person, idx) => (
            <div key={idx} className="bg-gray-50 p-3 rounded-xl flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#008080] shadow-sm">
                <i className={`fa-solid ${person.icon} text-xs`}></i>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">{person.name}</p>
                <p className="text-sm font-bold text-gray-700">${person.amount.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-gray-400 mt-3 text-center">* 含機票(依重量分)、住宿、包車、套票</p>
      </div>

      {/* Flight Info */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50">
        <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center">
          <i className="fa-solid fa-plane-departure mr-2 text-[#008080]"></i> 航班資訊
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-[#E0F2F1] p-2 rounded-lg text-[#008080] font-bold text-[10px]">去程</div>
            <div className="flex-grow">
              <div className="flex justify-between font-bold text-sm">
                <span>FD230</span>
                <span>13:30 ➔ 15:55</span>
              </div>
              <p className="text-[10px] text-gray-400">桃園機場 T1 ➔ 那霸機場</p>
            </div>
          </div>
          <div className="border-t border-gray-50 pt-4 flex items-center space-x-4">
            <div className="bg-[#FBE9E7] p-2 rounded-lg text-orange-600 font-bold text-[10px]">回程</div>
            <div className="flex-grow">
              <div className="flex justify-between font-bold text-sm">
                <span>OD883</span>
                <span>16:30 ➔ 17:15</span>
              </div>
              <p className="text-[10px] text-gray-400">那霸機場 T1 ➔ 桃園機場 T1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50">
        <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center">
          <i className="fa-solid fa-coins mr-2 text-[#008080]"></i> 團體支出概覽
        </h3>
        <div className="space-y-4">
          {COST_SUMMARY.map((cost, idx) => (
            <div key={idx} className="flex justify-between items-start text-sm">
              <div className="max-w-[65%]">
                <p className="font-bold text-gray-700">{cost.category}</p>
                <p className="text-[10px] text-gray-400">{cost.detail}</p>
              </div>
              <span className="font-bold text-[#008080] text-right text-xs">{cost.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-red-50 rounded-2xl p-5 shadow-sm border border-red-100">
        <h3 className="text-sm font-bold text-red-700 mb-3 flex items-center">
          <i className="fa-solid fa-phone-flip mr-2"></i> 緊急聯絡資訊
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-red-400 uppercase font-bold">警察局</span>
            <span className="text-lg font-bold text-red-600">110</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-red-400 uppercase font-bold">救護車</span>
            <span className="text-lg font-bold text-red-600">119</span>
          </div>
        </div>
      </div>

      {/* Precautions */}
      <div className="bg-yellow-50 rounded-2xl p-5 shadow-sm border border-yellow-100">
        <h3 className="text-sm font-bold text-yellow-700 mb-3 flex items-center">
          <i className="fa-solid fa-triangle-exclamation mr-2"></i> 旅遊禁忌與注意
        </h3>
        <ul className="text-xs text-yellow-800 space-y-2 list-disc pl-4 leading-relaxed">
          <li><strong>自駕注意：</strong> 沖繩為右駕，左轉小彎、右轉大彎。</li>
          <li><strong>現金需求：</strong> 租車補價差及部分市場、餐廳需日幣現金。</li>
          <li><strong>酒精飲品：</strong> 沖繩法律嚴禁酒後駕車。</li>
          <li><strong>室內禮儀：</strong> 進入飯店榻榻米區務必脫鞋。</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoTab;
