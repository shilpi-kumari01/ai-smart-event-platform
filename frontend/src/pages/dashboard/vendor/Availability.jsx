const Availability = () => {
  return (
    <div className="p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Availability</h2>

      <label className="block mb-2 font-medium">Available Dates</label>
      <input
        type="date"
        className="border p-2 rounded w-full mb-4"
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Save Availability
      </button>
    </div>
  );
};

export default Availability;
