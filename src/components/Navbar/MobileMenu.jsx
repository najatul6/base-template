import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import {motion}from "framer-motion"

const MobileMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
//   toggle Drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <motion.div
      initial={{x:"=100%"}}
      animate={{x: isOpen? "0%" : "100%"}}
       className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 ">
        <ul>
          {Menus?.map(({ name, subMenu }, idx) => {
            // checking subMenu exits 
            const hasSubMenu = subMenu?.length > 0;
            // checking if clicked menu
            const isClicked = clicked === idx;
            return (
              <li key={name}>
                <span
                // toggle sub menu item open
                  onClick={() => setClicked(isClicked ? null : idx)}
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative "
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </span>
                {hasSubMenu &&(
                    <motion.ul className="ml-5">
                        {
                            subMenu.map(({ name,icon:Icon }) => (
                            <li key={name} className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2">
                                <Icon size={17}/>
                               <span>
                               {name}
                                </span> 
                            </li>
                            ))
                        }
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

export default MobileMenu;
