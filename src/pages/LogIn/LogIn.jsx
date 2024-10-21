import background from "../../assets/background.jpg";
import avatar from "../../assets/avatar.svg";
import { useContext, useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  // Watch the value of the password field
  const passwordValue = watch("password", "");
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // The path to redirect to after login, defaults to the home page if none is specified
  const from = location.state?.from?.pathname || "/";

  // Log In With Email and Password
  const onSubmit = async (data) => {
    const processingToast = toast.loading("Checking User Data...");

    try {
      const result = await logIn(data.email, data.password);
      toast.dismiss(processingToast);
      reset();
      navigate(from, { replace: true });
      toast.success("Successfully logged in!", { autoClose: 1500 });
      console.log("User:", result.user);
    } catch (error) {
      toast.dismiss(processingToast);
      toast.error("Invalid email or password", { autoClose: 3000 });
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

      {/* form */}
      <div className="flex text-white justify-center items-center min-h-screen relative z-10">
        <div className="flex flex-col justify-center items-center gap-6 w-11/12 sm:w-10/12 md:w-8/12 lg:max-w-lg lg:h-[650px] bg-white/5 rounded-xl shadow-xl shadow-black/50 px-4 py-5 lg:py-10">
          <img src={avatar} className="rounded-full w-[100px] mb-4" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 font-[sans-serif] w-full"
          >
            <h1 className="text-3xl text-white uppercase font-bold tracking-[0.25rem] text-center py-5">
              Welcome
            </h1>
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
                      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
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
              {errors.password && (
                <p className="text-red-600" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Link to="#" className="text-blue-300 hover:underline">Forget Password?</Link>
            </div>

            <button
              type="submit"
              className="!mt-8 px-8 py-4 duration-300 text-xl uppercase font-bold text-white bg-black/25 hover:bg-white/15 shadow-inner rounded-full w-full"
            >
              Log In
            </button>
          </form>
          <div className="flex justify-center py-4">
            <p>
              Don&#39;t have an account?{" "}
              <Link
                to="/register"
                className="font-semibold tracking-[0.05rem] underline"
              >
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
