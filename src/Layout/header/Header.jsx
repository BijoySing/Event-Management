import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then((result) => console.log(result));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={{ textDecoration: 'none', color: 'blue',fontSize:'20px' }}
          activeStyle={{ fontWeight: 'bold', color: 'blue' }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={{ textDecoration: 'none', color: 'blue',fontSize:'20px' }}
          activeStyle={{ fontWeight: 'bold', color: 'pink' ,fontSize:'20px'}}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          style={{ textDecoration: 'none', color: 'blue',fontSize:'20px' }}
          activeStyle={{ fontWeight: 'bold', color: 'blue' }}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-300 shadow-lg rounded-lg m-auto mb-">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="normal-case font-bold text-4xl text-blue-900 hover:text-blue-500"
          style={{ textDecoration: 'none' }}
        >
          Event<span className="text-red-500">Hub</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <><div className="pic rounded-full flex">
          <img className="w-[50px] rounded-full" src={user.photoURL} alt="" />
            <p className="">{user.email}</p>
            </div>
            <button onClick={handleLogout} className="btn sign rounded-full">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn sign1 rounded-full">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
