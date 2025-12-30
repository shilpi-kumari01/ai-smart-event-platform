const Button = ({ label, onClick, type = "button", variant = "primary" }) => {
  const base =
    "px-5 py-2 rounded-lg text-sm font-medium transition-all";

  const styles = {
    primary: "bg-sky-500 hover:bg-sky-600 text-white",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white",
    outline: "border border-slate-500 hover:bg-slate-800 text-white",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
