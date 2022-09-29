import { connect } from 'react-redux';

import { useCanvasName } from '../application/useCanvasName';

function NavbarName({ canvasStore, saveNameActionStore }: any) {
  const {
    showInputName,
    setValueName,
    saveNameHandler,
    setShowInputName,
    onEnterPressed,
    valueName,
  } = useCanvasName({ canvasStore, saveNameActionStore });
  return (
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
  );
}
const mapStateToProps = (state: any) => ({
  canvasStore: state.CanvasReducer,
});
const mapDispatchToProps = (dispatch: any) => ({
  saveNameActionStore(name: string) {
    dispatch({
      type: 'CHANGE_NAME',
      name,
    });
    dispatch({
      type: 'SAVE_CANVAS_ACTION',
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(NavbarName);
