import { Outlet } from 'react-router';
import NavigationBar from './Navbar';
import { FooterWithLogo } from './Footer';

function Layout() {
  return (
    <>
      <NavigationBar />
        <Outlet />
      <FooterWithLogo />
    </>
  );
}

export default Layout;
