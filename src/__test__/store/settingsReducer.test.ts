import { describe, expect, it } from 'vitest';

import { colors } from '../../config/colors/colors';
import SettingsReducer from '../../store/settings/reducer';

describe('SettingsReducer', () => {
  it('returns the initial state', () => {
    const state = SettingsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({ lineWidth: 1, color: colors[0] });
  });

  it('increments the line width up to 15', () => {
    let state = SettingsReducer({ lineWidth: 14, color: colors[0] }, { type: 'INCREMENT_LINEWIDTH' });
    expect(state.lineWidth).toBe(15);
    state = SettingsReducer(state, { type: 'INCREMENT_LINEWIDTH' });
    expect(state.lineWidth).toBe(15);
  });

  it('decrements the line width down to 1', () => {
    let state = SettingsReducer({ lineWidth: 2, color: colors[0] }, { type: 'DECREMENT_LINEWIDTH' });
    expect(state.lineWidth).toBe(1);
    state = SettingsReducer(state, { type: 'DECREMENT_LINEWIDTH' });
    expect(state.lineWidth).toBe(1);
  });

  it('changes the color', () => {
    const state = SettingsReducer({ lineWidth: 1, color: colors[0] }, { type: 'CHANGE_COLOR', color: colors[3] });
    expect(state.color).toBe(colors[3]);
  });
});
