import errorImg from "../../assets/Error.json"
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import { Home } from "lucide-react";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-[#181181A]">
      <div className="flex flex-col min-h-screen items-center justify-center">
        <Lottie animationData={errorImg}></Lottie>
        <Link to="/" className="bg-white/5 py-4 px-5 uppercase font-bold rounded-full flex justify-center items-center gap-4 hover:bg-white/10">
        <Home/>
        Go to home
        </Link>
      </div>
    </div>
  );
}

export default Error