import { Menu, X } from "lucide-react"
import { useState } from "react"

const MobileMenu = ({Menus}) => {
    const [isOpen,setIsOpen]=useState(false)
    const toggleDrawer=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <button onClick={toggleDrawer}>
            {
                isOpen ? <X/>:<Menu/>
            }
        </button>
    </div>
  )
}

export default MobileMenu