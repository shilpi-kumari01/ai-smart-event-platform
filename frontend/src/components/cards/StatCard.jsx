const StatCard = ({ label, value }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
      <h3 className="text-2xl font-bold text-sky-400">
        {value}
      </h3>
      <p className="text-sm text-gray-400 mt-1">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
