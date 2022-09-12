import { useState } from 'react';
import { connect } from 'react-redux';

import NavbarActions from './NavbarActions';
import NavbarSettings from './NavbarSettings';

function Navbar({
  canvasStore,
  saveNameAction,
}: {
  canvasStore: any;
  saveNameAction: any;
}) {
  const [showInputName, setShowInputName] = useState<boolean>(false);
  const [valueName, setValueName] = useState<string>(canvasStore.name);

  const onSaveClick = () => {
    if (valueName) {
      saveNameAction(valueName);
      setShowInputName(false);
    }
  };
  return (
    <nav className="navbar">
      <NavbarSettings />
      <div className="navbar__title">
        {showInputName ? (
          <>
            <input
              className="navbar__title__input"
              value={valueName}
              onChange={(e) => setValueName(e.target.value)}
              maxLength={15}
            />
            <button className="navbar__title__button" onClick={() => onSaveClick()}>
              <i className="fa fa-save navbar__title__button__icon" />
            </button>
          </>
        ) : (
          <p className="navbar__title__text" onDoubleClick={() => setShowInputName(true)}>
            {canvasStore.name}
          </p>
        )}
      </div>
      <NavbarActions />
    </nav>
  );
}
const mapStateToProps = (state: any) => ({
  canvasStore: state.CanvasReducer,
});
const mapDispatchToProps = (dispatch: any) => ({
  saveNameAction(name: string) {
    dispatch({
      type: 'CHANGE_NAME',
      name,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
