

import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { PlusCircle } from 'lucide-react';

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    addExpense({
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString()
    });

    setText('');
    setAmount('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-4">Add Transaction</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Description</label>
          <input 
            type="text" 
            className="w-full p-3 bg-gray-50 rounded-lg outline-blue-500"
            placeholder="e.g. Starbucks"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Amount ($)</label>
          <input 
            type="number" 
            className="w-full p-3 bg-gray-50 rounded-lg outline-blue-500"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Category</label>
          <select 
            className="w-full p-3 bg-gray-50 rounded-lg outline-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Food</option>
            <option>Rent</option>
            <option>Shopping</option>
            <option>Transport</option>
            <option>Entertainment</option>
          </select>
        </div>
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
          <PlusCircle size={20} /> Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;