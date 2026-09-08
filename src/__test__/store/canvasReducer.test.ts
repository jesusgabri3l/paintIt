import { beforeEach, describe, expect, it } from 'vitest';

import CanvasReducer from '../../store/canvas/reducer';

describe('CanvasReducer', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the initial state', () => {
    const state = CanvasReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({ source: '', name: 'Paint', action: { type: '', trigger: true } });
  });

  it('saves the canvas source', () => {
    const state = CanvasReducer(undefined, { type: 'SAVE_CANVAS_SOURCE', source: 'abc' });
    expect(state.source).toBe('abc');
  });

  it('toggles the trigger on clear/undo/download', () => {
    const initial = CanvasReducer(undefined, { type: '@@INIT' });

    const cleared = CanvasReducer(initial, { type: 'CLEAR_CANVAS_ACTION' });
    expect(cleared.action).toEqual({ type: 'clear', trigger: !initial.action.trigger });

    const undone = CanvasReducer(cleared, { type: 'UNDO_CANVAS_ACTION' });
    expect(undone.action).toEqual({ type: 'undo', trigger: !cleared.action.trigger });

    const downloaded = CanvasReducer(undone, { type: 'DOWNLOAD_CANVAS_ACTION' });
    expect(downloaded.action).toEqual({ type: 'download', trigger: !undone.action.trigger });
  });

  it('changes the canvas name, falling back to Paint when empty', () => {
    const renamed = CanvasReducer(undefined, { type: 'CHANGE_NAME', name: 'My Board' });
    expect(renamed.name).toBe('My Board');

    const fallback = CanvasReducer(undefined, { type: 'CHANGE_NAME', name: '' });
    expect(fallback.name).toBe('Paint');
  });
});
