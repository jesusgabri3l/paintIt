import { combineReducers, createStore } from 'redux';

import CanvasReducer from './canvas/reducer';
import SettingsReducer from './settings/reducer';
const reducers = combineReducers({
  SettingsReducer,
  CanvasReducer,
});
export default createStore(reducers);
