import background from "../../assets/background.jpg";
import avatar from "../../assets/avatar.svg";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  
  // Watch the value of the password field
  const passwordValue = watch("password", "");
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen overflow-hidden relative w-full">
      <img
        src={background}
        alt="background"
        className="object-cover w-full h-full fixed inset-0 z-0"
      />

      {/* form  */}
      <div className="flex text-white justify-center items-center min-h-screen relative z-10">
        <div className=" flex justify-center items-center gap-6 w-11/12 lg:max-w-lg lg:h-[650px] bg-white/5  rounded-xl shadow-xl shadow-black/50 px-4 py-5 lg:py-10">
          <div className="w-full">
            <div className="flex-center-item-row">
              <img src={avatar} className="rounded-full w-[100px]" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-[sans-serif] max-w-lg mx-auto">
              <h1 className="text-3xl text-white uppercase font-bold tracking-[0.25rem] text-center py-5">
                Cerate Account
              </h1>
              <div>
                <div className="relative flex justify-center items-center">
                  <input
                    type="text"
                    {...register("fullName", {
                      required: "Email Address is required",
                    })}
                    aria-invalid={errors.fullName ? "true" : "false"}
                    placeholder="Enter Full Name"
                    className="pl-12 px-5 text-white placeholder-white py-3 bg-transparent font-semibold w-full  border-b-2 focus:border-[#1076FF] outline-none"
                  />
                  <FaUser className="w-[18px] h-[18px] absolute  left-4" />
                </div>
                {errors.fullName && (
                  <p className="text-red-600" role="alert">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <div className="relative flex justify-center items-center">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder="Enter Username or Email Address"
                    className="pl-12 px-5 text-white placeholder-white py-3 bg-transparent font-semibold w-full  border-b-2 focus:border-[#1076FF] outline-none"
                  />
                  <CgMail className="w-[18px] h-[18px] absolute  left-4" />
                </div>
                {errors.email && (
                  <p className="text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="relative flex justify-center items-center">
                <input
                  type={`${isEyeOpen ? "text" : "password"}`}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Password must be at least 8 characters long, contain an uppercase letter, and a number",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  placeholder="Enter Your Password"
                  className={`pl-12 text-white placeholder-white px-5 py-3 bg-transparent font-semibold w-full border-b-2 focus:border-[#1076FF] outline-none ${
                    passwordValue?.length >= 8
                      ? "bg-green-500/20"
                      : "bg-red-500/20"
                  }`}
                />

                <RiLockPasswordFill className="w-[18px] h-[18px] absolute left-4" />
                <div
                  onClick={() => setIsEyeOpen(!isEyeOpen)}
                  className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                >
                  {isEyeOpen ? <IoEyeOff /> : <IoEye />}
                </div>
              </div>

              <button
                type="submit"
                className="!mt-8 px-8 py-4  duration-300 text-xl uppercase font-bold text-white bg-black/25 hover:bg-white/15 shadow-inner rounded-full w-full"
              >
                Register
              </button>
            </form>
            <div className="flex justify-center py-4">
              <p>
                Already Have an account?{" "}
                <Link
                  to="/logIn"
                  className="font-semibold tracking-[0.05rem] underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
