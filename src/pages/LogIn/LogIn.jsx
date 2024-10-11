import { useState } from "react";
import { motion } from "framer-motion";

const LogIn = () => {
  const [showLogin, setShowLogin] = useState(true);

  // Toggle between Login Form and Welcome Text
  const toggleView = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Left Section */}
      <motion.div
        className="absolute w-1/2 bg-gray-100 flex items-center justify-center"
        initial={{ x: 0 }}
        animate={{ x: showLogin ? 0 : "-100%" }} // Animate out to the left
        exit={{ x: "-100%" }} // Exit to the left
        transition={{ duration: 0.5 }}
      >
        {showLogin ? (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="border p-2 mb-4 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 mb-4 w-full"
            />
            <button className="bg-blue-500 text-white px-4 py-2 w-full">
              Submit
            </button>
          </div>
        ) : (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Welcome to Our Service</h2>
            <p className="mb-4">We`re glad to have you here. Please log in to continue.</p>
            <button
              onClick={toggleView}
              className="bg-blue-500 text-white px-4 py-2"
            >
              Go to Login
            </button>
          </div>
        )}
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="absolute w-1/2 bg-blue-500 text-white flex items-center justify-center"
        initial={{ x: 0 }}
        animate={{ x: showLogin ? "100%" : "0%" }} // Animate in from the right
        exit={{ x: "100%" }} // Exit to the right
        transition={{ duration: 0.5 }}
      >
        {!showLogin ? (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="border p-2 mb-4 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 mb-4 w-full"
            />
            <button className="bg-white text-blue-500 px-4 py-2 w-full">
              Submit
            </button>
          </div>
        ) : (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
            <p className="mb-4">Please enter your details to log in.</p>
            <button
              onClick={toggleView}
              className="bg-white text-blue-500 px-4 py-2"
            >
              Go to Welcome
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LogIn;
