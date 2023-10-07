import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar/Navbar";
import Register from "../pages/register/Register";
import Footer from "../pages/footer/Footer";
import Header from "../pages/header/Header";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;