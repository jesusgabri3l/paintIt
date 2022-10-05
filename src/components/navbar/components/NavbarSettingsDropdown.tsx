import { BlockPicker } from 'react-color';
import { connect } from 'react-redux';

import { colors } from '../../../config/colors/colors';
import { useShortcuts } from '../../../config/shortcuts/useShortcutsSettings';
import { useClearCanvas } from '../application/useClearCanvas';
import { Props } from '../models/DropdownProps';

function NavbarSettingsDropdown({
  active,
  changeColor,
  clearAction,
  decrementLineWidth,
  incrementLineWidth,
  settings,
}: Props) {
  useShortcuts({ decrementLineWidth, incrementLineWidth });
  const { onClickClearButtonHandler } = useClearCanvas({ clearAction });
  return (
    <div className={`navbar__settings__dropdown ${active && 'active'}`}>
      <div className="navbar__settings__dropdown__width">
        <p className="navbar__settings__dropdwon__width__text text-white font-medium text-sm">
          Border width
        </p>
        <div className="navbar__settings__dropdown__width__section flex justify-between items-center mt-2">
          <button
            className="button button--primary button--small"
            onClick={() => decrementLineWidth()}
          >
            -
          </button>
          <p className="navbar__settings__dropdown__width__section__text w-full text-center text-2xl text-white text-bold rounded">
            {settings.lineWidth}
          </p>
          <button
            className="button button--primary button--small"
            onClick={() => incrementLineWidth()}
          >
            +
          </button>
        </div>
      </div>
      <div className="navbar__settings__dropdown__color mt-6">
        <p className="navbar__settings__dropdwon__width__text text-white font-medium text-sm ">
          Color
        </p>
        <div className="flex justify-center items-center mt-4">
          <BlockPicker
            color={settings.color}
            onChangeComplete={(color) => changeColor(color.hex)}
            colors={colors}
          />
        </div>
      </div>
      <hr className="mt-6 mb-6" />
      <button
        className="button button--danger mt-4"
        onClick={() => onClickClearButtonHandler()}
      >
        <i className="fa fa-eraser mr-2" />
        Clean canvas
      </button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  settings: state.SettingsReducer,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeColor(color: string) {
    dispatch({
      type: 'CHANGE_COLOR',
      color,
    });
  },
  decrementLineWidth() {
    dispatch({
      type: 'DECREMENT_LINEWIDTH',
    });
  },
  incrementLineWidth() {
    dispatch({
      type: 'INCREMENT_LINEWIDTH',
    });
  },
  clearAction() {
    dispatch({
      type: 'CLEAR_CANVAS_ACTION',
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(NavbarSettingsDropdown);
