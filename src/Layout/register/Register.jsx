import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import app from '../../firebase/firebase.config';

const Register = () => {
  const auth = getAuth(app);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error('Password must include uppercase and lowercase letters');
      return;
    }

    setRegisterError('');
    setSuccess('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update profile with display name
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      setSuccess('Registration successful');
      toast.success('Account created!');
      window.location.href = from;
    } catch (error) {
      console.error(error);
      setRegisterError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 select-none">
          Register to <span className="text-pink-600">EventHub</span>
        </h2>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Username */}
          <div className="relative">
            <AiOutlineUser className="absolute left-3 top-3 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              required
              className="w-5/6 pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-3 -translate-y-1/2 text-gray-400 text-xl" />
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
            <AiOutlineLock className="absolute left-3 top-3 -translate-y-1/2 text-gray-400 text-xl" />
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
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-md font-semibold transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-600 hover:text-pink-700 font-semibold">
            Login
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

export default Register;
