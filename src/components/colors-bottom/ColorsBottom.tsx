import { CirclePicker } from 'react-color';
import { connect } from 'react-redux';

import { useShortcutsColors } from '../../shortcuts/useShortcutsColors';
import { colors } from '../shared/colors';
function ColorsBottom({ settingsStore, changeColor }: any) {
  useShortcutsColors({ changeColor });
  return (
    <div className="color-helper">
      <CirclePicker
        colors={colors}
        width="310px"
        circleSize={20}
        color={settingsStore.color}
        onChangeComplete={(color) => changeColor(color.hex)}
      />
    </div>
  );
}
const mapStateToProps = (state: any) => ({
  settingsStore: state.SettingsReducer,
});
const mapDispatchToProps = (dispatch: any) => ({
  changeColor(color: string) {
    dispatch({
      type: 'CHANGE_COLOR',
      color,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ColorsBottom);
