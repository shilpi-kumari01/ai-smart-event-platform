const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-4 border-sky-500 border-t-transparent animate-spin"></div>
        <p className="text-sm text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default Loader;
