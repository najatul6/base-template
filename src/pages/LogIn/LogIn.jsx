import wave from "../../assets/wave.svg";
import avatar from "../../assets/avatar.svg";
// import bg from "../../assets/userImg.svg";
import { FaUser } from "react-icons/fa";
const LogIn = () => {
  return (
    <div className=" min-h-screen overflow-hidden relative">
      <img className="fixed" src={wave} />

      {/* form  */}
      <div className="flex justify-center items-center min-h-screen">
        {/* <img src={bg} className="w-full" /> */}
        <div className=" flex justify-center items-center  gap-6 w-6/12 h-[640px] bg-white/10 rounded-xl backdrop-blur-lg shadow-xl">
          <div className="w-full">
            <img src={avatar} className="rounded-full w-[100px]" />
            <form className="space-y-6 font-[sans-serif] max-w-lg mx-auto">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="px-2 py-3 bg-transparent text-black w-full text-sm border-b-2 focus:border-blue-500 outline-none"
                />
                <FaUser className="w-[18px] h-[18px] absolute left-4"/>
                
              </div>

              {/* password  */}
              <div className="relative flex items-center">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-blue-500 outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
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
