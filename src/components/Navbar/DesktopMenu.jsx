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
          <div>
            <div>
              {menu?.subMenu?.map((subMenu, idx) => (
                <div key={idx} className="">
                  <div>
                    <div>
                      {subMenu?.icon && <subMenu.icon className="w-4 h-4" />}
                    </div>
                    <div>
                      <h6>{subMenu?.name}</h6>
                      <p>{subMenu?.desc}</p>
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

export default DesktopMenu;
