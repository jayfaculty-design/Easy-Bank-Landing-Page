import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

const NavMenu = () => {
  const navContext = useContext(NavContext);

  if (!navContext) {
    throw new Error("NavContext is not provided");
  }

  const { navOpen, setNavOpen } = navContext;
  return (
    <div
      className={`nav-bar ${
        navOpen ? "show" : ""
      } fixed hidden z-50 w-full mt-15 p-5 bg-black/50 h-full`}
    >
      <ul className="bg-white flex flex-col font-medium items-center gap-5 py-7 rounded-md">
        <li onClick={() => setNavOpen(!navOpen)}>
          <a href="#">Home</a>
        </li>
        <li onClick={() => setNavOpen(!navOpen)}>
          <a href="#">About</a>
        </li>
        <li onClick={() => setNavOpen(!navOpen)}>
          <a href="#">Contact</a>
        </li>
        <li onClick={() => setNavOpen(!navOpen)}>
          <a href="#">Blog</a>
        </li>
        <li onClick={() => setNavOpen(!navOpen)}>
          <a href="#">Careers</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
