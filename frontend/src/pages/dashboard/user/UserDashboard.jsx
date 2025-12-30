import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <Link to="/dashboard/user/events" className="card">My Events</Link>
        <Link to="/dashboard/user/bookings" className="card">Bookings</Link>
        <Link to="/dashboard/user/payments" className="card">Payments</Link>
      </div>
    </div>
  );
};

export default UserDashboard;
