import Button from "../common/Button";

const SignupModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-slate-900 w-full max-w-md rounded-xl p-6 border border-slate-800">
        
        <h2 className="text-xl font-semibold text-white mb-4">
          Create Account
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-slate-800 text-white px-4 py-2 rounded-lg outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-slate-800 text-white px-4 py-2 rounded-lg outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-slate-800 text-white px-4 py-2 rounded-lg outline-none"
          />

          <Button label="Sign Up" />

          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-400 hover:text-white"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
