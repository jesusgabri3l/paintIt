import { toast } from 'react-toastify';

const canvasNameSaved = localStorage.getItem('canvasName');

const initState = {
  source: '',
  name: canvasNameSaved || 'Paint',
  action: { type: '', trigger: true },
};

export default function CanvasReducer(state = initState, action: any) {
  switch (action.type) {
    case 'SAVE_CANVAS_SOURCE':
      return { ...state, source: action.source };
    case 'CLEAR_CANVAS_ACTION':
      return {
        ...state,
        action: { type: 'clear', trigger: !state.action.trigger },
      };
    case 'UNDO_CANVAS_ACTION':
      return {
        ...state,
        action: { type: 'undo', trigger: !state.action.trigger },
      };
    case 'DOWNLOAD_CANVAS_ACTION':
      toast('Download completed 🎉');
      return { ...state, action: { type: 'download', trigger: !state.action.trigger } };
    case 'CHANGE_NAME':
      toast('Name changed successfully🎉');
      return { ...state, name: action.name || 'Paint' };
  }
  return state;
}
