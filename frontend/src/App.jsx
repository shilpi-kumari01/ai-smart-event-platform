import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Common Components */
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ProtectedRoute from "./components/common/ProtectedRoute";

/* Pages – Home */
import Home from "./pages/home/Home";

/* Auth Pages */
import UserLogin from "./pages/auth/UserLogin";
import UserSignup from "./pages/auth/UserSignup";
import VendorLogin from "./pages/auth/VendorLogin";
import VendorSignup from "./pages/auth/VendorSignup";
import AdminLogin from "./pages/auth/AdminLogin";

/* Event Categories */
import CollegeFest from "./pages/events/CollegeFest";
import TechConference from "./pages/events/TechConference";
import Wedding from "./pages/events/Wedding";
import CorporateMeeting from "./pages/events/CorporateMeeting";
import WorkshopSeminar from "./pages/events/WorkshopSeminar";

/* Cart */
import EventCart from "./pages/cart/EventCart";

/* Dashboards */
import UserDashboard from "./pages/dashboard/user/UserDashboard";
import VendorDashboard from "./pages/dashboard/vendor/VendorDashboard";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";

/* AI Pages */
import GenerateDescription from "./ai/GenerateDescription";
import BudgetEstimator from "./ai/BudgetEstimator";
import VendorRecommendation from "./ai/VendorRecommendation";

function App() {
  return (
    <Router>
      {/* Global Layout */}
      <div className="flex flex-col min-h-screen bg-slate-950 text-gray-100">
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/vendor/login" element={<VendorLogin />} />
            <Route path="/vendor/signup" element={<VendorSignup />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Event Categories */}
            <Route path="/events/college-fest" element={<CollegeFest />} />
            <Route path="/events/tech-conference" element={<TechConference />} />
            <Route path="/events/wedding" element={<Wedding />} />
            <Route path="/events/corporate" element={<CorporateMeeting />} />
            <Route path="/events/workshop" element={<WorkshopSeminar />} />

            {/* Cart */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute role="user">
                  <EventCart />
                </ProtectedRoute>
              }
            />

            {/* User Dashboard */}
            <Route
              path="/dashboard/user/*"
              element={
                <ProtectedRoute role="user">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />

            {/* Vendor Dashboard */}
            <Route
              path="/dashboard/vendor/*"
              element={
                <ProtectedRoute role="vendor">
                  <VendorDashboard />
                </ProtectedRoute>
              }
            />

            {/* Admin Dashboard */}
            <Route
              path="/dashboard/admin/*"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* AI Tools */}
            <Route
              path="/ai/generate-description"
              element={<GenerateDescription />}
            />
            <Route
              path="/ai/budget-estimator"
              element={<BudgetEstimator />}
            />
            <Route
              path="/ai/vendor-recommendation"
              element={<VendorRecommendation />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
