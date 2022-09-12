import { useEffect, useState } from 'react';

export const useCanvasSize = () => {
  const [height, setHeight] = useState(window.innerHeight - 80);
  const [width, setWidth] = useState(window.innerWidth);
  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight - 80);
  };
  useEffect(() => window.addEventListener('resize', onResize), []);

  return { height, width };
};
