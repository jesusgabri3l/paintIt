import { useEffect, useState } from 'react';

export const useCanvasLoadFromStorage = () => {
  const [canvasSaved, setCanvasSaved] = useState(undefined);
  useEffect(() => {
    const sourceStorage = localStorage.getItem('canvasSource');
    const sourceSaved = sourceStorage ? JSON.parse(sourceStorage) : null;
    setCanvasSaved(sourceSaved ? sourceSaved.data : undefined);
  }, []);

  return { canvasSaved };
};
