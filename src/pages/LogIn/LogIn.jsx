import wave from "../../assets/wave.svg";
import avatar from "../../assets/avatar.svg";
// import bg from "../../assets/userImg.svg";
// import { FaUser } from "react-icons/fa";
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
                  className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-blue-500 outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-4"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
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
