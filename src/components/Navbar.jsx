import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 font-mono lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 transition-all duration-700">
      <li className="flex items-center hover:text-blue-900 transition-all duration-700"><a href="#home">Home</a></li>
      <li className="flex items-center hover:text-blue-900 transition-all duration-700"><a href="#about">About</a></li>
      <li className="flex items-center hover:text-blue-900 transition-all duration-700"><a href="#contact">Contact</a></li>
      <li className="flex items-center hover:text-blue-900 transition-all duration-700"><a href="#contact">Pricing</a></li>
      <button className="bg-lime font-mono rounded-3xl px-5 py-2">Log In</button>
    </ul>
  );
}
 
export default function NavigationBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="sticky border-none p-4 top-0 text-white z-10 mx-auto max-w-full rounded-none shadow-none py-4 px-4 lg:px-8 lg:py-4 bg-gradient-to-r from-lime to-dark-blue">
      <div className="flex  items-center justify-center">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}