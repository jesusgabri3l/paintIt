import { createRef, useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

export default function Canvas() {
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
        gridColor="rgba(150,150,150,0.2)"
      />
    </div>
  );
}
