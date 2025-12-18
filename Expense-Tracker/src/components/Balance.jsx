export default function Balance({ transactions }) {
  const amounts = transactions.map((tx) => tx.amount);

  const income = amounts
    .filter((amt) => amt > 0)
    .reduce((acc, amt) => acc + amt, 0);

  const expense = amounts
    .filter((amt) => amt < 0)
    .reduce((acc, amt) => acc + amt, 0);

  const total = income + expense;

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Balance</h2>
      <h3 className="text-3xl font-bold">₹{total}</h3>

      <div className="flex justify-between mt-4 bg-gray-50 p-4 rounded-lg">
        <div className="text-green-600">
          <p>Income</p>
          <p className="font-bold">₹{income}</p>
        </div>
        <div className="text-red-600">
          <p>Expense</p>
          <p className="font-bold">₹{Math.abs(expense)}</p>
        </div>
      </div>
    </div>
  );
}
