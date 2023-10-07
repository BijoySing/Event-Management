import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>

        <div className="flex-none">
          <Link to="/" className="btn btn-primary mr-4">
            Home
          </Link>
          <Link to="/Register" className="btn btn-primary mr-5">
            Register
          </Link>
          <Link to="/Login" className="btn btn-primary">
            Login
          </Link>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="/src/assets/3.jpg" /> */}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
