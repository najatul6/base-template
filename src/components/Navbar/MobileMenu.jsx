import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  
  // Toggle Drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  // Animation for submenu
  const subMenuDrawer = {
    enter: {
      height: 'auto',
      overflow: 'hidden',
    },
    exit: {
      height: '0',
      overflow: 'hidden',
    }
  };

  // Handle NavLink click
  const handleLinkClick = () => {
    setIsOpen(false); // Close the drawer when a link is clicked
    setClicked(null); // Reset clicked submenu
  };

  return (
    <div>
      <button className="z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <motion.div
        initial={{ x: "100%" }} // Corrected from "=100%" to "100%"
        animate={{ x: isOpen ? "0%" : "100%" }}
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6"
      >
        <ul>
          {Menus?.map(({ name, path, subMenu }, idx) => {
            // Check if submenu exists
            const hasSubMenu = subMenu?.length > 0;
            // Check if the current menu item is clicked
            const isClicked = clicked === idx;

            return (
              <li key={name}>
                <NavLink
                  to={path || "#"} // Use path from Menus or fallback to '#'
                  onClick={handleLinkClick} // Close the drawer on link click
                  className={({ isActive }) =>
                    `flex justify-between items-center p-4 hover:bg-white/5 rounded-md cursor-pointer relative ${isActive ? 'bg-white/10' : ''}`
                  }
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </NavLink>
                {hasSubMenu && (
                  <motion.ul 
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon, path }) => (
                      <li key={name}>
                        <NavLink
                          to={path} // Use path from the submenu item
                          onClick={handleLinkClick} // Close the drawer on link click
                          className={({ isActive }) =>
                            `p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 ${isActive ? 'bg-white/10' : ''}`
                          }
                        >
                          <Icon size={17} />
                          <span>{name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

MobileMenu.propTypes = {
  Menus: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string, // Add path to prop types
      subMenu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          icon: PropTypes.elementType.isRequired,
          path: PropTypes.string, // Add path to subMenu items
        })
      ),
    })
  ),
};

export default MobileMenu;
