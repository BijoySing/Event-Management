import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";


const Header = () => {
    const {user,logout} =useContext(AuthContext);

    const handleLogout = () => {
        logout().then((result) => console.log(result));
      };
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        {/* <li><NavLink to="/login">login</NavLink></li> */}

    </>

    return (
        <div className="navbar bg-gray-300 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Event Planner</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {/* <div className="navbar-end"> */}
                {/* <Link to="/login" className="btn">Sign in</Link> */}
                {/* <button className="btn btn-warning">Log Out</button> */}
                {/* <p>{user.email}</p> */}
                {/* <a className='btn btn-primary bg-green-100' href="/login">Sign in</a> */}
                {/* <Link to="/login" className="btn">Sign In</Link> */}

            {/* </div> */}
            <div className="navbar-end">
                {user ? (
                    <>
                        <p>{user.email}</p>
                        <button onClick={handleLogout} className="btn">Log Out</button>
                    </>
                ) : (
                    <Link to="/login" className="btn">Sign In</Link>
                )}
            </div>
        </div>
    );
};

export default Header;