import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

const MainLayout = () => {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181A]">
      <Navbar/>
      </header>
      <Outlet/>
    </div>
  )
}

export default MainLayout