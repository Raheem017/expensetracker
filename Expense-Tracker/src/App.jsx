

import React, { useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const { user, logout } = useContext(ExpenseContext);

  if (!user) return <LoginPage />;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <nav className="bg-white border-b p-4 mb-8">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl text-blue-600">SpendWise</span>
          <div className="flex items-center gap-4">
            <span className="capitalize font-medium">Hello, {user}</span>
            <button onClick={logout} className="text-sm text-red-500 hover:font-bold">Logout</button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4">
        <Dashboard />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ExpenseForm />
          </div>
          <div className="lg:col-span-2">
            <ExpenseList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;