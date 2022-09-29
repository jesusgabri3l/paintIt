import { useState } from 'react';

export const useCanvasName = ({ canvasStore, saveNameActionStore }: any) => {
  const [showInputName, setShowInputName] = useState<boolean>(false);
  const [valueName, setValueName] = useState<string>(canvasStore.name);

  const saveNameHandler = () => {
    if (!valueName) return;
    saveNameActionStore(valueName);
    localStorage.setItem('canvasName', valueName);
    setShowInputName(false);
  };
  const onEnterPressed = (e: any) => {
    if (e.key === 'Enter') saveNameHandler();
  };
  return {
    showInputName,
    setValueName,
    valueName,
    saveNameHandler,
    setShowInputName,
    onEnterPressed,
  };
};
