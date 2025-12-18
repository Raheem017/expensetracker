import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const LoginPage = () => {
  const [name, setName] = useState('');
  const { login } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) login(name);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">SpendWise</h1>
        <p className="text-gray-500 text-center mb-8">Personal Expense Tracker</p>
        <form onSubmit={handleSubmit}>
          <input 
            className="w-full p-4 border rounded-xl mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700 transition">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;