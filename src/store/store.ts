import { combineReducers, createStore } from 'redux';

import SettingsReducer from './settings/reducer';
import CanvasReducer from './canvas/reducer';
const reducers = combineReducers({
  SettingsReducer,
  CanvasReducer,
});
export default createStore(reducers);
