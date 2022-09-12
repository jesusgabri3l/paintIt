import { connect } from 'react-redux';

import NavbarActions from './NavbarActions';
import NavbarSettings from './NavbarSettings';
function Navbar({ canvasStore }: { canvasStore: any }) {
  return (
    <nav className="navbar">
      <NavbarSettings />
      <div className="navbar__title">
        <p className="navbar__title__text">{canvasStore.name}</p>
      </div>
      <NavbarActions />
    </nav>
  );
}
const mapStateToProps = (state: any) => ({
  canvasStore: state.CanvasReducer,
});
export default connect(mapStateToProps, null)(Navbar);
