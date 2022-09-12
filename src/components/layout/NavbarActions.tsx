import { connect } from 'react-redux';
function NavbarActions({
  undoAction,
  downloadAction,
  saveAction,
}: {
  undoAction: any;
  downloadAction: any;
  saveAction: any;
}) {
  return (
    <div className="navbar__actions">
      <button className="navbar__button" onClick={() => undoAction()}>
        <i className="fa fa-undo navbar__button__icon" />
      </button>
      <button className="navbar__button" onClick={() => saveAction()}>
        <i className="fa fa-save navbar__button__icon" />
      </button>
      <button className="navbar__button" onClick={() => downloadAction()}>
        <i className="fa fa-download navbar__button__icon" />
      </button>
    </div>
  );
}
const mapDispatchToProps = (dispatch: any) => ({
  undoAction() {
    dispatch({
      type: 'UNDO_CANVAS_ACTION',
    });
  },
  downloadAction() {
    dispatch({
      type: 'DOWNLOAD_CANVAS_ACTION',
    });
  },
  saveAction() {
    dispatch({
      type: 'SAVE_CANVAS_ACTION',
    });
  },
});
export default connect(null, mapDispatchToProps)(NavbarActions);
