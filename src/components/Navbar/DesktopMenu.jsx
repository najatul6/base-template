import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const DesktopMenu = ({ menu }) => {
  // Check if menu has sub-menu items
  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <li className="group/link">
      <NavLink
        to={`${menu?.name === "Home" ? "/" : menu?.name}`}
        className="flex-center gap-1 px-3 py-1 cursor-pointer rounded-xl hover:bg-white/5"
      >
        {menu?.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
        {hasSubMenu && (
          <div className="sub-menu">
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
          </div>
        )}
      </NavLink>
    </li>
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
