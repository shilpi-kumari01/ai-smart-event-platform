import { Link } from "react-router-dom";

const VendorDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Vendor Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <Link to="/vendor/services" className="bg-white p-6 rounded shadow">
          Services
        </Link>

        <Link to="/vendor/availability" className="bg-white p-6 rounded shadow">
          Availability
        </Link>

        <Link to="/vendor/earnings" className="bg-white p-6 rounded shadow">
          Earnings
        </Link>

        <Link to="/vendor/reviews" className="bg-white p-6 rounded shadow">
          Reviews
        </Link>
      </div>
    </div>
  );
};

export default VendorDashboard;
