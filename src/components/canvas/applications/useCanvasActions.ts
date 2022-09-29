export const useCanvasActions = (canvasName: string) => {
  const downloadCanvasAction = (canvasRef: any) => {
    const link = document.createElement('a');
    link.href = canvasRef.current?.getDataURL('jpg');
    link.download = `${canvasName}.png`;
    link.click();
  };

  const saveCanvasToLocalStorageAction = (canvasRef: any) => {
    const canvasInstance = { data: canvasRef.current?.getSaveData() };
    localStorage.setItem('canvasSource', JSON.stringify(canvasInstance));
  };

  return { downloadCanvasAction, saveCanvasToLocalStorageAction };
};
