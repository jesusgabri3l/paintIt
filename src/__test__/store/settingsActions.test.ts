import { describe, expect, it } from 'vitest';

import { changeColor, decrementLineWidth, incrementLineWidth } from '../../store/settings/actions';

describe('settings actions', () => {
  it('creates an increment action', () => {
    expect(incrementLineWidth()).toEqual({ type: 'INCREMENT_LINEWIDTH' });
  });

  it('creates a decrement action', () => {
    expect(decrementLineWidth()).toEqual({ type: 'DECREMENT_LINEWIDTH' });
  });

  it('creates a change color action', () => {
    expect(changeColor('#000')).toEqual({ type: 'CHANGE_COLOR', color: '#000' });
  });
});
