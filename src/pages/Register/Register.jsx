import background from "../../assets/background.jpg";
import avatar from "../../assets/avatar.svg";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
const Register = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  return (
    <div>
       <img
        src={background}
        alt="background"
        className="object-cover w-full h-full fixed inset-0 z-0"
      />
    </div>
  )
}

export default Register