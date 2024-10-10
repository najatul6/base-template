import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const DesktopMenu = ({ menu }) => {
  // Check if menu has sub-menu items
  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <li>
      <NavLink
        to={menu?.name}
        className="flex-center gap-1 px-3 py-1 cursor-pointer rounded-xl hover:bg-white/5"
      >
        {menu?.name}
        {hasSubMenu && <ChevronDown className="mt-[0.6px]" />}
      </NavLink>
    </li>
  );
};

export default DesktopMenu;
