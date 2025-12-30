import { useState } from "react";

const BudgetEstimator = () => {
  const [eventType, setEventType] = useState("");
  const [audience, setAudience] = useState("");
  const [budget, setBudget] = useState(null);

  const estimateBudget = () => {
    let baseCost = 0;

    switch (eventType) {
      case "College Fest":
        baseCost = 800;
        break;
      case "Tech Conference":
        baseCost = 1500;
        break;
      case "Wedding":
        baseCost = 2500;
        break;
      case "Corporate Meeting":
        baseCost = 1200;
        break;
      case "Workshop":
        baseCost = 600;
        break;
      default:
        baseCost = 0;
    }

    const estimated = baseCost * Number(audience);
    setBudget(estimated);
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md">
      <h2 className="text-2xl font-bold mb-4">AI Budget Estimator</h2>

      <select
        className="border p-2 w-full mb-3 rounded"
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
      >
        <option value="">Select Event Type</option>
        <option>College Fest</option>
        <option>Tech Conference</option>
        <option>Wedding</option>
        <option>Corporate Meeting</option>
        <option>Workshop</option>
      </select>

      <input
        type="number"
        placeholder="Audience Size"
        className="border p-2 w-full mb-4 rounded"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
      />

      <button
        onClick={estimateBudget}
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Estimate Budget
      </button>

      {budget && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <p className="font-semibold">Suggested Budget:</p>
          <p className="text-xl font-bold">₹ {budget.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default BudgetEstimator;
