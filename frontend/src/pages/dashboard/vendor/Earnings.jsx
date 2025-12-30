const Earnings = () => {
  const earnings = [
    { event: "College Fest", amount: "₹30,000" },
    { event: "Wedding Event", amount: "₹45,000" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Earnings</h2>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Event</th>
            <th className="p-3 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {earnings.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{item.event}</td>
              <td className="p-3 font-semibold">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Earnings;
