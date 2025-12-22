import React, { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("currentUser") || null);
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);

  // Load user-specific data whenever the 'user' state changes
  useEffect(() => {
    if (user) {
      const savedData = localStorage.getItem(`expenses_${user}`);
      setExpenses(savedData ? JSON.parse(savedData) : []);
      localStorage.setItem("currentUser", user);
      const savedBalance = localStorage.getItem(`balance_${user}`);
      setBalance(savedBalance ? savedBalance : 0);
    }
  },[user]);

  // Sync expenses to LocalStorage whenever they change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`expenses_${user}`, JSON.stringify(expenses));
      localStorage.setItem(`balance_${user}`, balance);
    }
  }, [expenses, user,balance]);

  const login = (username) => setUser(username.toLowerCase());
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const addExpense = (item) => setExpenses([item, ...expenses]);
  const deleteExpense = (id) =>
    setExpenses(expenses.filter((e) => e.id !== id));

  return (
    <ExpenseContext.Provider
      value={{ user, expenses, login, logout, addExpense, deleteExpense,balance,setBalance }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
