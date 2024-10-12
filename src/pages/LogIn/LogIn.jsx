import wave from "../../assets/wave.svg";
import avatar from "../../assets/avatar.svg";
// import bg from "../../assets/userImg.svg";
import { FaUser } from "react-icons/fa";
const LogIn = () => {
  return (
    <div className=" min-h-screen overflow-hidden relative">
      <img className="fixed bottom-0 -left-72 " src={wave} />

      {/* form  */}
      <div className="flex justify-center items-center min-h-screen">
        {/* <img src={bg} className="w-full" /> */}
        <div className=" flex justify-center items-center  gap-6 w-6/12 h-[640px] bg-white/10 rounded-xl backdrop-blur-lg shadow-xl">
          <div className="w-full">
            <img src={avatar} className="rounded-full w-[100px]" />
            <form className="space-y-6 font-[sans-serif] max-w-lg mx-auto">
              <div className="relative flex justify-center items-center">
                <input
                  type="email"
                  placeholder="Enter Username or Email Address"
                  className="pl-12 px-5 py-3 bg-transparent font-semibold w-full  border-b-2 focus:border-[#1076FF] outline-none"
                />
                <FaUser className="w-[18px] h-[18px] absolute  left-4"/>
              </div>
              <div className="relative flex justify-center items-center">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="pl-12 px-5 py-3 bg-transparent font-semibold w-full  border-b-2 focus:border-[#1076FF] outline-none"
                />
                <FaUser className="w-[18px] h-[18px] absolute  left-4"/>
              </div>

              <div className="flex">
                <input type="checkbox" className="w-4" />
                <label className="text-sm ml-4 ">Remember me</label>
              </div>

              <button
                type="button"
                className="!mt-8 px-8 py-2.5 bg-blue-500 text-sm text-white hover:bg-blue-600 rounded-sm"
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
