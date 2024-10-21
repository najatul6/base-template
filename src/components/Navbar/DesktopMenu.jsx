import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);

  // Toggle hover state
  const toggleHover = () => {
    setIsHover(!isHover);
  };

  // Animation variants for submenu
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  // Check if menu has sub-menu items
  const hasSubMenu = menu?.subMenu?.length > 0;

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleHover}
      onHoverEnd={toggleHover}
    >
      {/* NavLink with active route highlighting */}
      <NavLink
        to={menu?.path || "#"} // Use path if available, otherwise fallback
        className={({ isActive }) =>
          `flex-center gap-1 px-3 py-1 cursor-pointer rounded-xl ${
            isActive ? "bg-blue-600 text-white" : "hover:bg-white/5"
          }`
        }
        aria-expanded={isHover}
      >
        {menu?.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}

        {/* Sub-menu that appears on hover */}
        {hasSubMenu && (
          <motion.div
            className="sub-menu"
            initial="exit"
            animate={isHover ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
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
                  <NavLink
                    to={subMenu.path} // Use path from submenu
                    className="flex-center gap-x-4 group/menuBox"
                  >
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menuBox:bg-white group-hover/menuBox:text-gray-900">
                      {subMenu?.icon && <subMenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold">{subMenu?.name}</h6>
                      <p className="text-sm text-gray-400">{subMenu?.desc}</p>
                    </div>
                  </NavLink>
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
    path: PropTypes.string, // Add path prop
    subMenu: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        icon: PropTypes.elementType,
        path: PropTypes.string, // Add path for subMenu items
      })
    ),
  }),
};

export default DesktopMenu;
