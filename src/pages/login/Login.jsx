import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {getAuth,  signInWithEmailAndPassword } from "@firebase/auth";
import app from '../../firebase/firebase.config';
// import { Auth } from 'firebase/auth';
const Login = () => {
    const [success, setSuccss] = useState("");
    const [registerError, setRegisterError] = useState("");
    const auth = getAuth(app);


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setRegisterError('');
        setSuccss('');
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccss('successfully');
                console.log(res.user)
                console.log("logged");

            })
            .catch(error => {
                console.log(error);
                 setRegisterError(error.message);
                setRegisterError('invalid email or password'); // Set the error message

            })

    }


    return (

        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
            {
            registerError && <h5>{registerError}</h5>

          }
          {
            success && <p>successfully</p>
          }
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className=" btn bg-green-500 text-gray-800 text-black px-8  rounded hover:bg-green-600 transition duration-300 ease-in-out">Login</button>
                        <p>                        Don't have Account?
                        </p>
                        <Link to="/Register" className="btn btn-primary bg-blue-300 mr-2">
                            Create Now
                        </Link>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default Login;