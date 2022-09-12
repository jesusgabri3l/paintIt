export const useCanvasActions = (canvasName: string) => {
  const sourceStorage = localStorage.getItem('canvasSource');
  const sourceSaved = sourceStorage ? JSON.parse(sourceStorage) : null;
  const dataSaved = sourceSaved ? sourceSaved.data : null;

  const downloadCanvasAction = (canvasRef: any) => {
    const link = document.createElement('a');
    link.href = canvasRef.current?.getDataURL('jpg');
    link.download = `${canvasName}.png`;
    link.click();
  };

  const saveCanvasAction = (canvasRef: any) => {
    const canvasInstance = { data: canvasRef.current?.getSaveData(), name: canvasName };
    localStorage.setItem('canvasSource', JSON.stringify(canvasInstance));
  };

  return { downloadCanvasAction, saveCanvasAction, dataSaved };
};
