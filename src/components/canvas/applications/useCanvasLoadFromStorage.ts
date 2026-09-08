import { useState } from 'react';

export const useCanvasLoadFromStorage = () => {
  const [canvasSaved] = useState(() => {
    const sourceStorage = localStorage.getItem('canvasSource');
    const sourceSaved = sourceStorage ? JSON.parse(sourceStorage) : null;
    return sourceSaved ? sourceSaved.data : undefined;
  });

  return { canvasSaved };
};
