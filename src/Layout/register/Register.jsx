import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
// const auth = getAuth(app);
// import app from '../../firebase/firebase.init';
import app from '../../firebase/firebase.config';
// import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
toast



const Register = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccss] = useState("");
    const handleRegister = (e) => {
        // const [registerError,setRegisterError] = useState(' ');
        // Define registerError and setRegisterError
        // setEmail(email);
        // console.log("email", email);
        e.preventDefault();
        console.log("done");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email);
        if (password.length < 6) {
            toast.error("Please enter 6 digit password");
            // toast.error('enter')

            

            return;
        }
        else if (!passwordRegex.test(password)) {
            // Password meets the criteria
            console.log("Password is valid");
            console.log("Password is invalid");
            // toast.error("registerError")

            toast.error("Your password should have at least one uppercase and lowercase character");
            return;
        }
        // console.log(email,password);
        setRegisterError('');
        setSuccss('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccss('successfully');
                console.log(res.user);
                toast.success('successfully Login')
                const navigate = useNavigate();
                navigate('/');


            })
            .catch(error => {
                console.log(error);
                // setRegisterError(error.message);
               // setRegisterError(error.message); // Set the error message

            })
    }
    return (
        <div>

            <div className="bg-gray-100 min-h-screen flex items-center justify-center">

                <div className="bg-white p-8 rounded shadow-md w-96">
                    {
                        // registerError && toast.error(registerError)

                    }
                    {
                        // success && toast.success(success)
                    }
                    <h1 className="text-2xl font-semibold mb-4">Register</h1>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                            <input type="email" id="email" name="email" className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="  text-center">
                            <button type="submit" className=" btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Register</button>
                            {/* <button className='btn btn-accent' >Sign in with google</button> */}
                            <p>                        alredy have Account?
                            </p>
                            <Link to="/login" className="btn btn-primary bg-green-500 mr-2">
                                Login
                            </Link>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Register;