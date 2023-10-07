import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Navbar from "../pages/navbar/Navbar";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Header from "../pages/header/Header";
import Footer from "../pages/footer/Footer";


const routes = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/Navbar',
                element: <Navbar></Navbar>
            },
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
        {
                path: '/Header',
                element: <Header></Header>
            },
        {
                path: '/Footer',
                element: <Footer></Footer>
            }

        ]
    }
]);
export default routes;