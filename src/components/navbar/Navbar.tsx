import NavbarActions from './components/NavbarActions';
import NavbarName from './components/NavbarName';
import NavbarSettings from './components/NavbarSettings';

function Navbar() {
  return (
    <nav className="navbar">
      <NavbarSettings />
      <NavbarName />
      <NavbarActions />
    </nav>
  );
}

export default Navbar;
