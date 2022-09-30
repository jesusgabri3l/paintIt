import { connect } from 'react-redux';

import { useShortcuts } from '../../../config/shortcuts/useShortcutsActions';

function NavbarActions({
  undoAction,
  downloadAction,
}: {
  undoAction: any;
  downloadAction: any;
}) {
  useShortcuts({ undoAction });
  return (
    <div className="navbar__actions">
      <button className="navbar__button" onClick={() => undoAction()}>
        <i className="fa fa-undo navbar__button__icon" />
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
});
export default connect(null, mapDispatchToProps)(NavbarActions);
