import { createStore } from 'redux';
const initState = { lineWidth: 5, color: '#000' };
const reducerSettings = (state = initState, action: any) => {
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
};

export default createStore(reducerSettings);
