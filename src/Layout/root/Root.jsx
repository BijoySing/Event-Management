import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import { ImOffice } from "react-icons/im";
import './Root.css'; // Import the CSS file for global styles

 // Ensure that the CSS file is imported to apply styles globally



const Root = () => {
    return (
        <div>
            <div className='bg-pink-00 text-gray-800'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer /> 

        </div>
    );
};

export default Root;