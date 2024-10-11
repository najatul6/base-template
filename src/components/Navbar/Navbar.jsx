import { Link } from "react-router-dom";
import Logo from "../../assets/bird-animals-leaf-logo.png";
import { Menus } from "../../utils/utils";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181A]">
        <nav className="px-3.5 flex-center-between w-full max-w-[1920px] mx-auto">
          {/* Logo section  */}
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="brand Logo" className="size-11" />
            <h3 className="text-lg font-semibold">Template</h3>
          </div>
          {/* Menus section  */}
          {/* Desktop section  */}
          <ul className="lg:flex-center hidden gap-x-1">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu?.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
          <Link to="/logIn">
            <button
            className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Sign In
            </button>
            </Link>
            {/* Mobile Menu  */}
            <div className="lg:hidden">
              <MobileMenu Menus={Menus}/>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
