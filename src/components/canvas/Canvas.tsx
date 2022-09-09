import { createRef, useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { connect } from 'react-redux';

function Canvas({ settings }: { settings: any }) {
  const [height, setHeight] = useState(window.innerHeight - 80);
  const [width, setWidth] = useState(window.innerWidth);
  const canvas = createRef<CanvasDraw>();

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight - 80);
  };
  useEffect(() => window.addEventListener('resize', onResize), []);
  return (
    <div className="canvas">
      <CanvasDraw
        ref={canvas}
        canvasWidth={width}
        canvasHeight={height}
        lazyRadius={1}
        brushColor={settings.color}
        gridColor="rgba(150,150,150,0.2)"
        catenaryColor={settings.color}
        brushRadius={settings.lineWidth}
      />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  settings: state,
});
export default connect(mapStateToProps, {})(Canvas);
