
import React, { useState, useEffect } from 'react';
import { Expense } from '../types';

const WalletTab: React.FC = () => {
  const [exchangeRate, setExchangeRate] = useState<number>(0.215);
  const [expression, setExpression] = useState('');
  const [itemName, setItemName] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('trip_expenses');
    if (saved) setExpenses(JSON.parse(saved));
    const savedRate = localStorage.getItem('exchange_rate');
    if (savedRate) setExchangeRate(parseFloat(savedRate));
  }, []);

  const saveToLocal = (newExpenses: Expense[]) => {
    localStorage.setItem('trip_expenses', JSON.stringify(newExpenses));
    setExpenses(newExpenses);
  };

  const calculateAndAdd = () => {
    try {
      // Basic math evaluation safely
      // eslint-disable-next-line no-eval
      const result = eval(expression.replace(/[^-+/*0-9.]/g, ''));
      const jpy = parseFloat(result);
      if (isNaN(jpy) || !itemName) return;

      const newExpense: Expense = {
        id: Date.now().toString(),
        item: itemName,
        jpyAmount: jpy,
        twdAmount: Math.round(jpy * exchangeRate),
        timestamp: Date.now(),
      };

      saveToLocal([newExpense, ...expenses]);
      setExpression('');
      setItemName('');
    } catch (e) {
      alert('算式輸入錯誤');
    }
  };

  const deleteExpense = (id: string) => {
    saveToLocal(expenses.filter(e => e.id !== id));
  };

  const totalJPY = expenses.reduce((acc, curr) => acc + curr.jpyAmount, 0);
  const totalTWD = expenses.reduce((acc, curr) => acc + curr.twdAmount, 0);

  return (
    <div className="space-y-6 pb-4">
      {/* Rate Setting */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-gray-700">匯率設定</h3>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">1 JPY =</span>
            <input 
              type="number" 
              step="0.001"
              value={exchangeRate}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setExchangeRate(val);
                localStorage.setItem('exchange_rate', val.toString());
              }}
              className="w-16 text-center border-b border-[#008080] text-sm font-bold text-[#008080] focus:outline-none"
            />
            <span className="text-xs text-gray-400">TWD</span>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-3">
          <input 
            type="text" 
            placeholder="支出品項 (如: 晚餐、車票)"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#008080]"
          />
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="算式或日幣金額 (如: 1200+500)"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#008080]"
            />
            <button 
              onClick={calculateAndAdd}
              className="bg-[#008080] text-white px-6 rounded-xl font-bold shadow-sm active:scale-95 transition-transform"
            >
              新增
            </button>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-[#008080] to-[#20B2AA] p-4 rounded-2xl text-white shadow-md">
          <p className="text-[10px] opacity-80 mb-1">總日幣支出</p>
          <p className="text-xl font-bold">¥ {totalJPY.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] text-gray-400 mb-1">約合台幣</p>
          <p className="text-xl font-bold text-[#008080]">$ {totalTWD.toLocaleString()}</p>
        </div>
      </div>

      {/* Expense List */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-gray-700 px-1">消費紀錄</h3>
        {expenses.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <i className="fa-solid fa-receipt text-4xl mb-2 opacity-20"></i>
            <p className="text-sm">尚無消費紀錄</p>
          </div>
        ) : (
          expenses.map(expense => (
            <div key={expense.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex justify-between items-center group">
              <div className="flex items-center space-x-3">
                <div className="bg-[#E0F2F1] w-10 h-10 rounded-full flex items-center justify-center text-[#008080]">
                  <i className="fa-solid fa-tag text-sm"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-700">{expense.item}</h4>
                  <p className="text-[10px] text-gray-400">{new Date(expense.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </div>
              <div className="text-right flex items-center space-x-4">
                <div>
                  <p className="text-sm font-bold text-gray-700">¥ {expense.jpyAmount.toLocaleString()}</p>
                  <p className="text-[10px] text-[#008080] font-medium">≈ $ {expense.twdAmount.toLocaleString()}</p>
                </div>
                <button 
                  onClick={() => deleteExpense(expense.id)}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  <i className="fa-solid fa-trash-can text-sm"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WalletTab;
