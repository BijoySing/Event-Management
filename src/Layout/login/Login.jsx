import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Icons
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const auth = getAuth(app);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Google Sign-In successful');
      window.location.href = from;
    } catch (error) {
      setRegisterError('Google Sign-In error: ' + error.message);
      toast.error('Google Sign-In error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setRegisterError('');
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful');
      window.location.href = from;
    } catch (error) {
      setRegisterError('Invalid email or password');
      toast.error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 select-none">
          Login to <span className="text-pink-600">EventHub</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-3 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-5/6 pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <AiOutlineLock className="absolute left-3 top-3 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-5/6 pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-md font-semibold transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="my-6 flex items-center justify-center space-x-3">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 font-medium">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-400 py-3 rounded-md font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FcGoogle className="text-2xl" />
          {loading ? 'Processing...' : 'Sign in with Google'}
        </button>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/Register" className="text-pink-600 hover:text-pink-700 font-semibold">
            Create Now
          </Link>
        </p>

        {registerError && (
          <p className="mt-4 text-center text-red-600 font-semibold select-none">{registerError}</p>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
