const initState = { lineWidth: 1, color: '#000' };

export default function SettingsReducer(state = initState, action: any) {
  switch (action.type) {
    case 'INCREMENT_LINEWIDTH':
      if (state.lineWidth < 15) return { ...state, lineWidth: state.lineWidth + 1 };
      return state;
    case 'DECREMENT_LINEWIDTH':
      if (state.lineWidth > 1) return { ...state, lineWidth: state.lineWidth - 1 };
      return state;
    case 'CHANGE_COLOR':
      return { ...state, color: action.color };
  }
  return state;
}
