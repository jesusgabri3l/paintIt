import { createRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { connect } from 'react-redux';

import { useCanvasActions } from './applications/useCanvasActions';
import { useCanvasLoadFromStorage } from './applications/useCanvasLoadFromStorage';
import { useCanvasSize } from './applications/useCanvasSize';
import { Props } from './models/Props';

function Canvas({
  settings,
  canvasStore,
  //When on change the canvas
  saveCanvasSource,
}: Props) {
  // Custom hooks for logical
  const { height, width } = useCanvasSize();
  const { downloadCanvasAction, saveCanvasToLocalStorageAction } = useCanvasActions(
    canvasStore.name,
  );
  const { canvasSaved } = useCanvasLoadFromStorage();
  const canvasRef = createRef<CanvasDraw>();
  // For handling canvasChange
  const canvasOnChange = () => {
    saveCanvasSource(canvasRef.current?.getSaveData());
    saveCanvasToLocalStorageAction(canvasRef);
  };
  // For handling the action triggered
  useEffect(() => {
    switch (canvasStore.action.type) {
      case 'undo':
        canvasRef.current?.undo();
        break;
      case 'download':
        downloadCanvasAction(canvasRef);
        break;
      case 'clear':
        canvasRef.current?.clear();
        canvasOnChange();
        break;
      default:
        return;
    }
  }, [canvasStore.action.trigger]);

  return (
    <div className="canvas">
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={width}
        canvasHeight={height}
        lazyRadius={1}
        brushColor={settings.color}
        gridColor="rgba(150,150,150, 0.2)"
        catenaryColor={settings.color}
        brushRadius={settings.lineWidth}
        onChange={() => canvasOnChange()}
        saveData={canvasSaved}
        immediateLoading
      />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  settings: state.SettingsReducer,
  canvasStore: state.CanvasReducer,
});
const mapDispatchToProps = (dispatch: any) => ({
  saveCanvasSource(source: string) {
    dispatch({
      type: 'SAVE_CANVAS_SOURCE',
      source,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
