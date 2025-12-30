import placeholder from "../../assets/images/placeholder.svg";

const VendorCard = ({ name, category, location, rating, image }) => {
  return (
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-sky-500 transition">
      <div className="flex items-center gap-4">
        {image ? (
          <img src={image} alt={name} className="avatar" />
        ) : (
          <img src={placeholder} alt="avatar" className="avatar" />
        )}

        <div>
          <h4 className="text-white font-medium">{name}</h4>
          <p className="text-sm text-gray-400">{category}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-gray-400">{location}</span>
        <span className="text-yellow-400">⭐ {rating}</span>
      </div>
    </div>
  );
};

export default VendorCard;
