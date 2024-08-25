import { brainwave } from "../../assets";
import { navigation } from "../../constants";
import MenuSvg from "../../assets/svg/MenuSvg";
import Button from "../elements/Button";
import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav
      className={`h-[80px] w-screen fixed top-0 left-0 bg-n-8/90
      backdrop-blur-sm border-b border-n-6 z-4`}
    >
      <div className="container flex justify-between items-center h-full">
        <a href="#hero">
          <img src={brainwave} alt="brainwave" />
        </a>
        <div className="">
          <ul className="hidden lg:flex lg:flex-row items-center gap-16">
            {navigation.map((link) => (
              <li
                key={link.id}
                className="tagline font-bold text-n-2 hover:text-n-1 transition-all"
              >
                {link.id === "5" ? (
                  <Button href={link.url} white={false}>
                    {link.title}
                  </Button>
                ) : (
                  <a href={link.url}>{link.title}</a>
                )}
              </li>
            ))}
          </ul>
          <div className="block lg:hidden" onClick={() => setShow(!show)}>
            <Button px="px-5">
              <MenuSvg openNavigation={show} />
            </Button>
          </div>
        </div>
        {/* Mobile Navbar */}
        <div
          className={`block lg:hidden fixed  bg-n-8/90 backdrop-blur-sm h-screen ${
            show ? "top-[80px]" : "top-[-2000px]"
          } left-0 w-screen h-[100vh - 80px]`}
        >
          <ul className="flex flex-col items-center gap-16 p-8">
            {navigation.map((link) => (
              <li
                key={link.id}
                className="tagline *:font-bold *:body-1 *:text-n-2 hover:*:text-color-1"
              >
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
