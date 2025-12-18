


import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { Trash2, ShoppingBag, Coffee, Home, Car, Film } from 'lucide-react';

const CategoryIcon = ({ cat }) => {
  switch(cat) {
    case 'Food': return <Coffee className="text-orange-500" />;
    case 'Shopping': return <ShoppingBag className="text-purple-500" />;
    case 'Rent': return <Home className="text-blue-500" />;
    case 'Transport': return <Car className="text-green-500" />;
    default: return <Film className="text-pink-500" />;
  }
};

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-4">Recent History</h3>
      {expenses.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          <p>No data yet. Start by adding an expense!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {expenses.map((exp) => (
            <div key={exp.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl group hover:bg-gray-100 transition">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <CategoryIcon cat={exp.category} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 capitalize">{exp.text}</p>
                  <p className="text-xs text-gray-500">{exp.date} • {exp.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-red-600">-₹{exp.amount.toFixed(2)}</span>
                <button 
                  onClick={() => deleteExpense(exp.id)}
                  className="p-2 text-gray-300 hover:text-red-500 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;