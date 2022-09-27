import { useState } from 'react';
import { connect } from 'react-redux';

import NavbarActions from './components/NavbarActions';
import NavbarSettings from './components/NavbarSettings';

function Navbar({
  canvasStore,
  saveNameAction,
}: {
  canvasStore: any;
  saveNameAction: any;
}) {
  const [showInputName, setShowInputName] = useState<boolean>(false);
  const [valueName, setValueName] = useState<string>(canvasStore.name);

  const saveNameHandler = (canvasName = valueName) => {
    if (!canvasName) return;
    saveNameAction(canvasName);
    setShowInputName(false);
  };

  const onEnterPressed = (e: any) => {
    if (e.key === 'Enter') saveNameHandler();
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
              onKeyDown={(e) => onEnterPressed(e)}
              maxLength={15}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            />
            <button className="navbar__title__button" onClick={() => saveNameHandler()}>
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
    dispatch({
      type: 'SAVE_CANVAS_ACTION',
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
