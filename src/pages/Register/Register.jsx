import { useState } from "react";
import {motion} from "framer-motion"

const Register = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    // <div className="flex justify-center items-center min-h-screen">
    //   <div className="bg-white/10 rounded-xl shadow-lg overflow-hidden w-full mx-auto">
    //     {/* Sign UP  */}
    //     <div className="flex h-full">
    //       <form className="border border-red-400">
    //         <h1 className="text-2xl">Create an account</h1>
    //         <input
    //           className="input my-2"
    //           type="text"
    //           name=""
    //           id=""
    //           placeholder="UserName"
    //         />
    //         <input
    //           className="input my-2"
    //           type="email"
    //           name=""
    //           id=""
    //           placeholder="Email"
    //         />
    //         <input
    //           className="input my-2"
    //           type="password"
    //           name=""
    //           id=""
    //           placeholder="Password"
    //         />
    //         <button className="btn-ctm">sign up</button>
    //       </form>
    //       {/* toggle left  */}
    //       <div className="border border-blue-400">
    //         <h1 className="text-2xl">Hello! </h1>
    //         <p className="mt-5">
    //           Register with your personal Details to use all of site features
    //         </p>
    //         <button className=" bg-transparent">sign in</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen flex justify-center items-center">
    <motion.div
      className="w-10/12 min-h-[600px] flex justify-center rounded-xl overflow-hidden bg-white/10 shadow-xl shadow-white/10"
      initial={false}
      animate={{ flexDirection: isActive ? "row" : "row-reverse" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}  
    >
      {/* Inputs Section */}
      <motion.div
        className="w-4/5 flex justify-center items-center"
        initial={false}
        animate={{ left: isActive ? "0%" : "60%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}  
      >
        {isActive ? (
          <div>
            <p>Log in inputs</p>
          </div>
        ) : (
          <div>
            <p>Register inputs</p>
          </div>
        )}
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="bg-red-400 w-3/5 flex justify-center items-center"
        initial={false}
        animate={{ left: isActive ? "60%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}  
      >
        {isActive ? (
          <div>
            <p>Log in text</p>
            <button onClick={toggleActive}>click</button>
          </div>
        ) : (
          <div>
            <p>Register text</p>
            <button onClick={toggleActive}>click</button>
          </div>
        )}
      </motion.div>
    </motion.div>
  </div>

    // <div className="min-h-screen flex justify-center items-center">
    //   <div
    //     className={`w-10/12 min-h-[600px] flex justify-center items-center rounded-xl overflow-hidden bg-white/10 shadow-xl shadow-white/10 transition-all duration-500`}
    //   >
    //     {/* Left Side (Text) */}
    //     <div
    //       className={`w-3/5 h-full bg-red-400 flex justify-center items-center transition-all duration-500 ${
    //         isActive ? "order-2 rounded-s-full" : "order-1 rounded-e-full"
    //       }`}
    //     >
    //       {isActive ? (
    //         <div>
    //           <p>Log in text</p>
    //           <button onClick={toggleActive}>Switch to Register</button>
    //         </div>
    //       ) : (
    //         <div>
    //           <p>Register text</p>
    //           <button onClick={toggleActive}>Switch to Log in</button>
    //         </div>
    //       )}
    //     </div>

    //     {/* Right Side (Inputs) */}
    //     <div
    //       className={`w-4/5 h-full flex justify-center items-center transition-all duration-500 ${
    //         isActive ? "order-1" : "order-2"
    //       }`}
    //     >
    //       {isActive ? (
    //         <div>
    //           <p>Log in inputs</p>
    //         </div>
    //       ) : (
    //         <div>
    //           <p>Register inputs</p>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Register;
