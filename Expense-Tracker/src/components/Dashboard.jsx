

import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Dashboard = () => {
  const { expenses, balance, setBalance } = useContext(ExpenseContext);

  const [inputBalance, setInputBalance] = useState("");

  // total expenses
  const totalExpenses = expenses.reduce(
    (acc, item) => acc + Number(item.amount),
    0
  );

  // remaining balance
  const remainingBalance = balance - totalExpenses;

  const handleSubmit = (e) => {
    e.preventDefault();
    setBalance(Number(inputBalance));
    setInputBalance("");
  };

  return (
    <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl text-white shadow-lg mb-8">
      <h2 className="text-lg opacity-80 uppercase tracking-wider font-semibold">
        Remaining Balance
      </h2>

      <p className="text-5xl font-black mt-2">
        ₹{remainingBalance.toFixed(2)}
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
        <input
          type="number"
          placeholder="Add Balance"
          value={inputBalance}
          onChange={(e) => setInputBalance(e.target.value)}
          className="text-black px-3 py-2 rounded  focus:outline-none "
        />
        <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold ">
          Add Balance
        </button>
      </form>

      <div className="flex gap-10 mt-6">
        <div>
          <p className="text-sm opacity-70">Transactions</p>
          <p className="text-xl font-bold">{expenses.length}</p>
        </div>
        <div>
          <p className="text-sm opacity-70">Total Expenses</p>
          <p className="text-xl font-bold">
            ₹{totalExpenses.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

 