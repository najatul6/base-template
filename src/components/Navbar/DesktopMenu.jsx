import PropTypes from "prop-types";
import { ChevronDown, Rotate3D } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const DesktopMenu = ({ menu }) => {
  const [isHover,setIsHover]=useState(false);
  const toggleHover=()=>{
    setIsHover(!isHover);
  }

  // Animation Varients
  const subMenuAnimate={
    enter:{
      opacity:1,
      rotateX:0,
      transition:{
        duration:0.5,
      },
      display:"block",
    },
    exit:{
      opacity:0,
      rotateX:-15,
      transition:{
        duration:0.5,
      },
      display:"none",
    }
  }
  // Check if menu has sub-menu items
  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <motion.li className="group/link" onHoverStart={toggleHover} onHoverEnd={toggleHover}> 
      <NavLink
        to={`${menu?.name === "Home" ? "/" : menu?.name}`}
        className="flex-center gap-1 px-3 py-1 cursor-pointer rounded-xl hover:bg-white/5"
      >
        {menu?.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
        {hasSubMenu && (
          <motion.div className="sub-menu" initial="exit" animate={isHover? "enter":"exit"} variants={subMenuAnimate}>
            <div
              className={`grid gap-7 ${
                menu?.gridCols === 3
                  ? "grid-cols-3"
                  : menu?.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {menu?.subMenu?.map((subMenu, idx) => (
                <div key={idx} className="relative cursor-pointer">
                  <div className="flex-center gap-x-4 group/menuBox">
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menuBox:bg-white group-hover/menuBox:text-gray-900">
                      {subMenu?.icon && <subMenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold">{subMenu?.name}</h6>
                      <p className="text-sm text-gray-400">{subMenu?.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </NavLink>
    </motion.li>
  );
};

DesktopMenu.propTypes = {
  menu: PropTypes.shape({
    gridCols: PropTypes.number,
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    subMenu: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        icon: PropTypes.elementType,
      })
    ),
  }),
  
};

export default DesktopMenu;
