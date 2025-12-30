import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid md:grid-cols-5 gap-6">
        <Link className="card">Users</Link>
        <Link className="card">Vendors</Link>
        <Link className="card">Categories</Link>
        <Link className="card">Analytics</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
