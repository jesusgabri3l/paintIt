import { useLayoutEffect } from 'react';
const KEYS_CODE = {
  s: 83,
  z: 90,
};
export const useShortcuts = ({ saveAction, undoAction }: any) => {
  useLayoutEffect(() => {
    document.body.addEventListener('keydown', (event) => {
      if (event.ctrlKey && 's'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && 'z'.indexOf(event.key) !== -1) event.preventDefault();
    });

    document.addEventListener('keyup', (e: any) => {
      if (e.ctrlKey && e.keyCode == KEYS_CODE['s']) saveAction();
      if (e.ctrlKey && e.keyCode == KEYS_CODE['z']) undoAction();
    });
  }, []);
};
