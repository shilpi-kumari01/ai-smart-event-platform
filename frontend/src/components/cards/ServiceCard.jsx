const ServiceCard = ({ name, price, rating, onAdd }) => {
  return (
    <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 hover:border-sky-500 transition">
      <h4 className="text-white font-medium">{name}</h4>

      <p className="text-sm text-gray-400 mt-1">
        ₹ {price}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-yellow-400 text-sm">
          ⭐ {rating}
        </span>

        <button
          onClick={onAdd}
          className="text-sm text-sky-400 hover:text-sky-300"
        >
          Add to Event
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
