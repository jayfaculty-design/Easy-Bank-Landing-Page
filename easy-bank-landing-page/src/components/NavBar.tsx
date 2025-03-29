import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";
import Button from "./Button/Button";

const NavBar = () => {
  const navigations = ["Home", "About", "Contact", "Blog", "Careers"];
  const navContext = useContext(NavContext);

  if (!navContext) {
    throw new Error("NavContext is not provided");
  }

  const { navOpen, setNavOpen } = navContext;
  return (
    <div className="bg-white fixed top-0 w-full z-50">
      <div className="top px-5 sm:px-6 md:py-7 lg:px-14 py-5 flex justify-between items-center">
        <div className="logo">
          <a href="#">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden text-grayish-blue lg:flex gap-7 items-center font-medium">
          {navigations.map((nav, index) => (
            <a
              key={index}
              href="#"
              className="cursor-pointer hover:text-dark-blue"
            >
              {nav}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button label="Request Invite" />
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="menu-icon cursor-pointer lg:hidden"
        >
          {!navOpen ? (
            <img className="h-3" src="/icon-hamburger.svg" alt="menu-icon" />
          ) : (
            <img src="/icon-close.svg" alt="close-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
