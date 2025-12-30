import { Link } from "react-router-dom";
import MenuIcon from "../../assets/icons/menu.svg";
import SearchIcon from "../../assets/icons/search.svg";
import LogoImg from "../../assets/images/vendor-1.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={LogoImg} alt="logo" className="w-10 h-10 rounded-md" />
          <span className="text-xl font-bold text-sky-400">AIEvents</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
          <Link to="/events/college-fest" className="hover:text-white">
            Events
          </Link>
          <Link to="/" className="hover:text-white">
            Vendors
          </Link>
          <Link to="/login" className="hover:text-white">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile icons */}
        <div className="flex items-center gap-4 md:hidden">
          <img src={SearchIcon} alt="search" className="icon" />
          <img src={MenuIcon} alt="menu" className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
