
import React, { useState, useEffect } from 'react';

const WalletTab: React.FC = () => {
  const [jpyInput, setJpyInput] = useState<string>('');
  const [exchangeRate, setExchangeRate] = useState<number>(0.21);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch real-time exchange rate
  useEffect(() => {
    const fetchRate = async () => {
      try {
        setLoading(true);
        // Using a free API for exchange rates
        const response = await fetch('https://open.er-api.com/v6/latest/JPY');
        const data = await response.json();
        if (data && data.rates && data.rates.TWD) {
          const rate = data.rates.TWD;
          setExchangeRate(rate);
          setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
          localStorage.setItem('cached_jpy_twd_rate', rate.toString());
        }
      } catch (error) {
        console.error('Failed to fetch rate:', error);
        // Fallback to cached or default
        const cached = localStorage.getItem('cached_jpy_twd_rate');
        if (cached) setExchangeRate(parseFloat(cached));
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
    // Auto refresh every 5 minutes
    const interval = setInterval(fetchRate, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const clearInput = () => setJpyInput('');
  const appendNumber = (num: string) => {
    if (jpyInput.length >= 10) return;
    setJpyInput(prev => prev + num);
  };
  const backspace = () => setJpyInput(prev => prev.slice(0, -1));

  const twdResult = jpyInput ? Math.round(parseFloat(jpyInput) * exchangeRate) : 0;

  return (
    <div className="space-y-6 pb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Exchange Rate Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <i className="fa-solid fa-coins text-8xl -rotate-12"></i>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-500 text-sm font-medium">即時匯率 (JPY/TWD)</h3>
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full">
              <div className={`w-2 h-2 rounded-full ${loading ? 'bg-amber-400 animate-pulse' : 'bg-emerald-500'}`}></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{loading ? '更新中' : '連線中'}</span>
            </div>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-black text-[#008080]">{exchangeRate.toFixed(4)}</span>
            <span className="text-gray-400 font-bold text-sm">TWD / 1 JPY</span>
          </div>

          {lastUpdated && (
            <p className="mt-2 text-[10px] text-gray-300">
              最後更新時間: {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Converter Display */}
      <div className="bg-gradient-to-br from-[#008080] to-[#20B2AA] rounded-3xl p-8 text-white shadow-xl shadow-[#00808020] relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">日圓 JPY</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-medium opacity-50">¥</span>
              <span className="text-4xl font-black tracking-tight">
                {jpyInput ? parseInt(jpyInput).toLocaleString() : '0'}
              </span>
            </div>
          </div>

          <div className="h-[1px] bg-white/20 w-full"></div>

          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">台幣 TWD (估計)</p>
            <div className="flex items-center justify-between text-[#E0F2F1]">
              <span className="text-2xl font-medium opacity-50">$</span>
              <span className="text-5xl font-black tracking-tight">
                {twdResult.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Subtle background circles */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-black/5 rounded-full blur-2xl"></div>
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => appendNumber(num.toString())}
            className="bg-white hover:bg-gray-50 active:scale-90 h-16 rounded-2xl shadow-sm border border-gray-50 text-xl font-bold text-gray-700 transition-all"
          >
            {num}
          </button>
        ))}
        <button
          onClick={clearInput}
          className="bg-white hover:bg-rose-50 active:scale-90 h-16 rounded-2xl shadow-sm border border-gray-50 text-xl font-bold text-rose-500 transition-all"
        >
          AC
        </button>
        <button
          onClick={() => appendNumber('0')}
          className="bg-white hover:bg-gray-50 active:scale-90 h-16 rounded-2xl shadow-sm border border-gray-50 text-xl font-bold text-gray-700 transition-all"
        >
          0
        </button>
        <button
          onClick={backspace}
          className="bg-white hover:bg-amber-50 active:scale-90 h-16 rounded-2xl shadow-sm border border-gray-50 text-xl font-bold text-amber-500 transition-all"
        >
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </div>

      <p className="text-center text-[10px] text-gray-400 px-6">
        * 匯率僅供參考，實際交易請以銀行或換錢所公告為準。
      </p>
    </div>
  );
};

export default WalletTab;

