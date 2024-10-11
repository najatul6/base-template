import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const MobileMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <div className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 ">
        <ul>
          {Menus?.map(({ name, submenu }, idx) => {
            const hasSubMenu = submenu?.length > 0;
            const isClicked = clicked === idx;
            return (
              <li key={name}>
                <span
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
