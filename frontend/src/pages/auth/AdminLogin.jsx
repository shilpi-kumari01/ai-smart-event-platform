import Button from "../../components/common/Button";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="bg-slate-900 p-8 rounded-xl w-full max-w-md border border-slate-800">
        
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Admin Login
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Admin Email"
            className="bg-slate-800 px-4 py-2 rounded-lg text-white outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-slate-800 px-4 py-2 rounded-lg text-white outline-none"
          />

          <Button label="Login as Admin" />
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
