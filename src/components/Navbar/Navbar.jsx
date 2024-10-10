import Logo from "../../assets/bird-animals-leaf-logo.png";
import { Menus } from "../../utils/utils";
import DesktopMenu from "./DesktopMenu";
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
          <ul className="flex-center">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu?.name} />
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
