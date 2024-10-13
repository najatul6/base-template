import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/Error.json"

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-[#181181A]">
      <div className="flex flex-col min-h-screen items-center justify-center">
        <Lottie animationData={errorImg}></Lottie>
        <Link className="bg-white/5 py-4 px-5 uppercase font-bold rounded-full">
        Go to home
        </Link>
      </div>
    </div>
  );
}

export default Error