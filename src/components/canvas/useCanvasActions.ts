export const useCanvasActions = () => {
  const sourceStorage = localStorage.getItem('canvasSource');
  const sourceSaved = sourceStorage ? JSON.parse(sourceStorage) : null;

  const downloadCanvasAction = (canvasRef: any, name: string) => {
    const link = document.createElement('a');
    link.href = canvasRef.current?.getDataURL('jpg');
    link.download = `${name}.png`;
    link.click();
  };

  const saveCanvasAction = (canvasRef: any) => {
    const source = canvasRef.current?.getSaveData();
    localStorage.setItem('canvasSource', JSON.stringify(source));
  };

  return { downloadCanvasAction, saveCanvasAction, sourceSaved };
};
