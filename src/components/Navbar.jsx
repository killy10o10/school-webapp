import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 font-mono lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 transition-all duration-700">
      <li className="flex items-center hover:text-blue-900 transition-all duration-700"><Link to="/">Home</Link></li>
      <li className="flex items-center hover:text-blue-900 transition-all duration-700"><a href="#about">About</a></li>
      <li className="flex items-center hover:text-blue-900 transition-all duration-700"><a href="#contact">Contact</a></li>
      <li className="flex items-center hover:text-blue-900 transition-all duration-700"><a href="#contact">Pricing</a></li>
      <Link to="login" className="w-fit"><Button color="green" className="bg-lime font-mono font-normal capitalize text-base rounded-3xl py-2 px-5">Log In</Button></Link>
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
    <Navbar className="lg:sticky lg:z-10 lg:top-0 border-none p-4 lg:px-8 lg:py-4 text-white mx-auto max-w-full rounded-none shadow-none bg-gradient-to-r from-lime to-dark-blue">
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