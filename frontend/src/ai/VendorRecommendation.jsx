const VendorRecommendation = ({ eventType }) => {
  const vendors = {
    "College Fest": ["Stage & Sound", "Food Stalls", "Security Services"],
    "Tech Conference": ["AV Setup", "Catering", "Networking Lounge"],
    Wedding: ["Decorators", "Catering", "Photography"],
    "Corporate Meeting": ["Conference Hall", "AV Setup", "Catering"],
    Workshop: ["Projector Setup", "Refreshments"],
  };

  const recommendations = vendors[eventType] || [];

  return (
    <div className="bg-white p-6 rounded shadow max-w-md">
      <h2 className="text-2xl font-bold mb-4">
        AI Vendor Recommendations
      </h2>

      {eventType ? (
        <ul className="space-y-2">
          {recommendations.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 p-3 rounded"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          Select an event type to see recommendations.
        </p>
      )}
    </div>
  );
};

export default VendorRecommendation;
