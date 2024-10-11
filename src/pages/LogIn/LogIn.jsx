import { Link } from "react-router-dom"

const LogIn = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-6 items-center">LogIn
    <Link to="/register"><button className="bg-white/5 rounded-md px-5 py-2">Sign Up</button></Link>
    </div>
  )
}

export default LogIn