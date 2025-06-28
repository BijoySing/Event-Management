import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import "./header.css"; // Assuming you have some custom styles

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout().then(() => setDropdownOpen(false));
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blogs", label: "Blogs" },
    { path: "/faq", label: "FAQ" },
    // { path: "/ff", label: "FF" },
  ];

  const links = navItems.map(({ path, label }) => (
    <motion.li
      key={path}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          `px-4 rounded-lg transition font-medium duration-200 ease-in-out text-xl
           ${isActive
            ? "text-pink-700  font-bold border-b-2 border-gradient-to-r from-indigo-400 to-rose-400"
            : "hover:text-pink-600 hover:font-semibold"}`
        }
      >
        {label}
      </NavLink>
    </motion.li>
  ));

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-pink-50 text-white shadow-xl "
    >
      <div className= "w-70% mx-auto  flex justify-evenly items-center py-1 px-8 ">
        {/* Left: Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-800 hover:scale-105 transition">
          Event<span className="text-pink-600">Hub</span>
        </Link>

        {/* Center: Nav links */}
        <ul className="hidden lg:flex space-x-6">{links}</ul>

        {/* Right: User Section */}
        <div className="relative flex items-center gap-3">
          {user ? (
            <div className="relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-gray-500 shadow-lg"
                />
                <FaChevronDown className="text-sm" />
              </div>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-10"
                >
                  <p className="px-4 py-2 text-sm border-b">{user.email}</p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-white text-rose-600 hover:bg-rose-200 font-semibold px-4 py-2 rounded-full shadow transition duration-300"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden px-4 pt-2 pb-4">
        <ul className="flex flex-col space-y-2">{links}</ul>
      </div>
    </motion.nav>
  );
};

export default Header;
