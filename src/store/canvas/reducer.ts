const initState = { source: '', name: 'Paint', action: { type: '', trigger: true } };

export default function CanvasReducer(state = initState, action: any) {
  switch (action.type) {
    case 'SAVE_CANVAS_SOURCE':
      return { ...state, source: action.source };
    case 'SAVE_CANVAS_ACTION':
      return { ...state, action: { type: 'save', trigger: !state.action.trigger } };
    case 'CLEAN_CANVAS_ACTION':
      return { ...state, action: { type: 'clean', trigger: !state.action.trigger } };
    case 'UNDO_CANVAS_ACTION':
      return { ...state, action: { type: 'undo', trigger: !state.action.trigger } };
    case 'DOWNLOAD_CANVAS_ACTION':
      return { ...state, action: { type: 'download', trigger: !state.action.trigger } };
    case 'CHANGE_NAME':
      return { ...state, name: action.name };
  }
  return state;
}
