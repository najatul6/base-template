import wave from "../../assets/wave.svg";
import avatar from "../../assets/avatar.svg";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
const LogIn = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  return (
    <div className=" min-h-screen overflow-hidden relative bg-red-400">
      <img className="fixed bottom-0 " src={wave} />

      {/* form  */}
      <div className="flex justify-center items-center min-h-screen">
        <div className=" flex justify-center items-center  gap-6 w-11/12 lg:w-8/12 lg:h-[540px] bg-white/10 rounded-xl backdrop-blur-lg shadow-xl px-4 py-10">
          <div className="w-full">
            <div className="flex-center-item-row">
              <img src={avatar} className="rounded-full w-[100px]" />
            </div>
            <form className="space-y-6 font-[sans-serif] max-w-lg mx-auto">
            <h1 className="text-3xl uppercase font-bold tracking-[0.25rem] text-center py-5">Welcome</h1>
              <div className="relative flex justify-center items-center">
                <input
                  type="email"
                  placeholder="Enter Username or Email Address"
                  className="pl-12 px-5 py-3 bg-transparent font-semibold w-full  border-b-2 focus:border-[#1076FF] outline-none"
                />
                <FaUser className="w-[18px] h-[18px] absolute  left-4" />
              </div>
              <div className="relative flex justify-center items-center">
                <input
                  type={`${isEyeOpen ? "password" : "text"}`}
                  placeholder="Enter Your Password"
                  className="pl-12 px-5 py-3 bg-transparent font-semibold w-full  border-b-2 focus:border-[#1076FF] outline-none"
                />

                <RiLockPasswordFill className="w-[18px] h-[18px] absolute left-4" />
                <div
                  onClick={() => setIsEyeOpen(!isEyeOpen)}
                  className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                >
                  {isEyeOpen ? <IoEye /> : <IoEyeOff />}
                </div>
              </div>

              <div className="flex justify-end">
                <Link>Forget Password?</Link>
              </div>

              <button
                type="submit"
                className="!mt-8 px-8 py-2.5 bg-blue-500 text-sm text-white hover:bg-blue-600 rounded-full w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
