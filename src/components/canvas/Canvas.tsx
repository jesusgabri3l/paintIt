import { createRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { connect } from 'react-redux';

import { Props } from './applications/Props';
import { useCanvasActions } from './applications/useCanvasActions';
import { useCanvasSize } from './applications/useCanvasSize';

function Canvas({
  settings,
  canvasStore,
  //When on change the canvas
  saveCanvasSource,
}: Props) {
  const { height, width } = useCanvasSize();
  const canvasRef = createRef<CanvasDraw>();
  const { downloadCanvasAction, saveCanvasAction, dataSaved } = useCanvasActions(
    canvasStore.name,
  );
  const canvasOnChange = () => saveCanvasSource(canvasRef.current?.getSaveData());

  useEffect(() => {
    switch (canvasStore.action.type) {
      case 'undo':
        canvasRef.current?.undo();
        break;
      case 'save':
        saveCanvasAction(canvasRef);
        break;
      case 'download':
        downloadCanvasAction(canvasRef);
        break;
      case 'clear':
        canvasRef.current?.clear();
        saveCanvasAction(canvasRef);
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
        saveData={dataSaved}
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
