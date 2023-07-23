import { Outlet } from 'react-router';
import NavigationBar from './Navbar';
import background from "../assets/BG.svg"


function Layout() {

  const styles = {
    backgroundImage: `url("${background}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <main className="min-h-screen" style={styles}>
        <NavigationBar />
        <Outlet />
    </main>
  );
}

export default Layout;
