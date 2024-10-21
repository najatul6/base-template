import background from "../../assets/background.jpg";
import avatar from "../../assets/avatar.svg";
import { FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const passwordValue = watch("password", "");

  const onSubmit = async (data) => {
    const processingToast = toast.loading("Creating Data...");
    try {
      const result = await createUser(data.email, data.password);
      reset();
      navigate("/");
      toast.update(processingToast, {
        render: "Account Created Successfully!",
        type: "success",
        isLoading: false,
        autoClose: 1500,
        closeButton: true,
      });
      console.log("User:", result.user);
    } catch (error) {
      toast.update(processingToast, {
        render: `${error.message}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
      console.error(error);
    }
  };

  return (
    <div className="h-screen relative w-full">
      <img
        src={background}
        alt="background"
        className="object-cover w-full h-full fixed inset-0 z-0"
      />
      <div className="flex text-white justify-center items-center min-h-screen relative z-10">
        <div className="flex justify-center items-center gap-6 w-11/12 lg:max-w-lg lg:h-[650px] bg-white/5 rounded-xl shadow-xl shadow-black/50 px-4 py-5 lg:py-10">
          <div className="w-full">
            <div className="flex-center-item-row mb-5">
              <img src={avatar} className="rounded-full w-[100px] mx-auto" />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 font-[sans-serif] max-w-lg mx-auto"
            >
              <h1 className="text-3xl text-white uppercase font-bold tracking-[0.25rem] text-center">
                Create Account
              </h1>
              <div>
                <div className="relative flex justify-center items-center">
                  <input
                    type="text"
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    aria-invalid={errors.fullName ? "true" : "false"}
                    placeholder="Enter Full Name"
                    className="pl-12 px-5 text-white placeholder-white py-3 bg-transparent font-semibold w-full border-b-2 focus:border-[#1076FF] outline-none"
                  />
                  <FaUser className="w-[18px] h-[18px] absolute left-4" />
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
                    placeholder="Enter Email Address"
                    className="pl-12 px-5 text-white placeholder-white py-3 bg-transparent font-semibold w-full border-b-2 focus:border-[#1076FF] outline-none"
                  />
                  <CgMail className="w-[18px] h-[18px] absolute left-4" />
                </div>
                {errors.email && (
                  <p className="text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <div className="relative flex justify-center items-center">
                  <input
                    type={`${isEyeOpen ? "text" : "password"}`}
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                        message:
                          "Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character",
                      },
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder="Enter Your Password"
                    className={`pl-12 text-white placeholder-white px-5 py-3 bg-transparent font-semibold w-full border-b-2 focus:border-[#1076FF] outline-none ${passwordValue ? "text-green-600" : ""}`}
                  />
                  <RiLockPasswordFill className={`w-[18px] h-[18px] absolute left-4`} />
                  <div
                    onClick={() => setIsEyeOpen(!isEyeOpen)}
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                  >
                    {isEyeOpen ? <IoEyeOff /> : <IoEye />}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-600" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="!mt-8 px-8 py-4 duration-300 text-xl uppercase font-bold text-white bg-black/25 hover:bg-white/15 shadow-inner rounded-full w-full"
              >
                Register
              </button>
            </form>
            <div className="flex justify-center py-4">
              <p>
                Already have an account?{" "}
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
