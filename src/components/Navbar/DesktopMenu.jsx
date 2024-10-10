import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DesktopMenu = ({menu}) => {
  return (
    <li>
        <Link to={menu.name}>{menu?.name}</Link>
    </li>
  )
}

menu.propTypes={
  
}


export default DesktopMenu