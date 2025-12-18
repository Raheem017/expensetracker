import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Dashboard = () => {
  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl text-white shadow-lg mb-8">
      <h2 className="text-lg opacity-80 uppercase tracking-wider font-semibold">
        Total Balance
      </h2>
      <h1 className="text-5xl font-black mt-2">₹{total.toLocaleString()}</h1>
      <div className="flex gap-10 mt-6">
        <div>
          <p className="text-sm opacity-70">Transactions</p>
          <p className="text-xl font-bold">{expenses.length}</p>
        </div>
        <div>
          <p className="text-sm opacity-70">Avg. Expense</p>
          <p className="text-xl font-bold">
            ₹{expenses.length > 0 ? (total / expenses.length).toFixed(2) : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
