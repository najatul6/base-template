import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="top-[4.2rem]">
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout