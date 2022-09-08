import NavbarActions from './NavbarActions';
import NavbarSettings from './NavbarSettings';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavbarSettings />
      <div className="navbar__title">
        <p className="navbar__title__text">The Great Spiderman</p>
      </div>
      <NavbarActions />
    </nav>
  );
}
