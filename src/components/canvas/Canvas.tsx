import { createRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { connect } from 'react-redux';

import { Props } from './Props';
import { useCanvasActions } from './useCanvasActions';
import { useCanvasSize } from './useCanvasSize';

function Canvas({ settings, canvasStore, saveCanvas }: Props) {
  const { height, width } = useCanvasSize();
  const canvasRef = createRef<CanvasDraw>();
  const { downloadCanvasAction, saveCanvasAction, sourceSaved } = useCanvasActions();

  const canvasOnChange = () => saveCanvas(canvasRef.current?.getSaveData());

  useEffect(() => {
    if (canvasStore.action.type === 'undo') canvasRef.current?.undo();
    if (canvasStore.action.type === 'save') saveCanvasAction(canvasRef);
    if (canvasStore.action.type === 'download')
      downloadCanvasAction(canvasRef, canvasStore.name);
  }, [canvasStore.action.trigger]);

  return (
    <div className="canvas">
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={width}
        canvasHeight={height}
        lazyRadius={1}
        brushColor={settings.color}
        gridColor="rgba(150,150,150,0.2)"
        catenaryColor={settings.color}
        brushRadius={settings.lineWidth}
        onChange={() => canvasOnChange()}
        saveData={sourceSaved}
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
  saveCanvas(source: string) {
    dispatch({
      type: 'SAVE_CANVAS_SOURCE',
      source,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
