import { useState } from "react";

const Register = () => {
  const [signIn, toggle] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white/10">
      <div className="relative bg-white/5 rounded-lg shadow-lg w-[678px] max-w-full min-h-[400px] overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full transition-all duration-700 ease-in-out w-1/2 ${
            signIn ? "opacity-0 z-10 translate-x-full" : "opacity-100 z-20"
          }`}
        >
          <form className="bg-white/5 flex flex-col items-center justify-center px-12 h-full text-center">
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              className="bg-white/15 border-none py-3 px-4 mb-2 w-full rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white/15 border-none py-3 px-4 mb-2 w-full rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white/15 border-none py-3 px-4 mb-2 w-full rounded"
            />
            <button className="bg-red-500 text-white text-xs font-bold py-3 px-10 rounded-full transition-transform transform active:scale-95 uppercase">
              Sign Up
            </button>
          </form>
        </div>

        <div
          className={`absolute top-0 left-0 h-full transition-all duration-700 ease-in-out w-1/2 ${
            signIn ? "opacity-100 z-20" : "opacity-0 z-10 translate-x-full"
          }`}
        >
          <form className="bg-white/5 flex flex-col items-center justify-center px-12 h-full text-center">
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              className="bg-white/15 border-none py-3 px-4 mb-2 w-full rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white/15 border-none py-3 px-4 mb-2 w-full rounded"
            />
            <a href="#" className="text-gray-700 text-sm no-underline my-3">
              Forgot your password?
            </a>
            <button className="bg-red-500 text-white text-xs font-bold py-3 px-10 rounded-full transition-transform transform active:scale-95 uppercase">
              Sign In
            </button>
          </form>
        </div>

        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-30 ${
            signIn ? "" : "transform -translate-x-full"
          }`}
        >
          <div
            className={`bg-gradient-to-r from-red-500 to-pink-500 text-white absolute left-[-100%] h-full w-[200%] transform transition-transform duration-700 ease-in-out ${
              signIn ? "" : "translate-x-1/2"
            }`}
          >
            <div
              className={`absolute flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 transform ${
                signIn ? "-translate-x-1/5" : "translate-x-0"
              } transition-transform duration-700 ease-in-out`}
            >
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-sm font-light leading-5 tracking-wider mb-6">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => toggle(true)}
                className="bg-transparent border border-white text-white py-3 px-10 rounded-full transition-transform transform active:scale-95 uppercase"
              >
                Sign In
              </button>
            </div>

            <div
              className={`absolute flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 right-0 transform ${
                signIn ? "translate-x-0" : "translate-x-1/5"
              } transition-transform duration-700 ease-in-out`}
            >
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="text-sm font-light leading-5 tracking-wider mb-6">
                Enter your personal details and start your journey with us
              </p>
              <button
                onClick={() => toggle(false)}
                className="bg-transparent border border-white text-white py-3 px-10 rounded-full transition-transform transform active:scale-95 uppercase"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
