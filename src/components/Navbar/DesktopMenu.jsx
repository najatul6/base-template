import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const DesktopMenu = ({ menu }) => {
  // Check if menu has sub-menu items
  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <li>
      <Link to={menu?.name}>{menu?.name}</Link>
      {hasSubMenu && <ChevronDown className="mt-[0.6px]"/>}
    </li>
  );
}

export default DesktopMenu;
