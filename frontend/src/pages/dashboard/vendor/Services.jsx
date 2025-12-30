const Services = () => {
  const services = [
    { name: "Stage Setup", price: "₹20,000" },
    { name: "Catering", price: "₹500 / person" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Services</h2>

      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex justify-between bg-white p-4 rounded shadow"
          >
            <span>{service.name}</span>
            <span className="font-semibold">{service.price}</span>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded">
        Add New Service
      </button>
    </div>
  );
};

export default Services;
