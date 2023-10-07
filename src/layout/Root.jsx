import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar/Navbar";
import Register from "../pages/register/Register";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Register></Register>             */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;