import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import Google Sign-In related functions
import app from '../../firebase/firebase.config';

const Login = () => {
    const [success, setSuccss] = useState("");
    const [registerError, setRegisterError] = useState("");
    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();
    const prevLocation = useLocation();
    console.log(prevLocation)
    const from = location.state?.from?.pathname || '/';
    // const { from } = location.state || { from: { pathname: '/service/:id' } }; // Default to '/service/:id'


    // Function to handle Google Sign-In
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("Google Sign-In successful:", user);
                setSuccss('Google Sign-In successful');
                window.location.href = from; // Redirect to the previous page

            })
            .catch((error) => {
                console.error("Google Sign-In error:", error);
                setRegisterError('Google Sign-In error: ' + error.message);
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setRegisterError('');
        setSuccss('');
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccss('Login successful');
                console.log(res.user);
                console.log("Logged in");
                // const navigate = useNavigate();
                // navigate('/');
                window.location.href = from; // Redirect to the previous page



            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            });
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                {registerError && <h5>{registerError}</h5>}
                {success && <p>{success}</p>}
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
                        <button type="submit" className="btn bg-green-500 text-gray-800 text-black px-8 rounded hover:bg-green-600 transition duration-300 ease-in-out">Login</button>
                        <button type="button" onClick={handleGoogleSignIn} className='btn btn-accent'>Sign in with Google</button>
                        <p>Don't have an Account?</p>
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
