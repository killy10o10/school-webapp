import { Outlet } from 'react-router';
import NavigationBar from './Navbar';

function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default Layout;
