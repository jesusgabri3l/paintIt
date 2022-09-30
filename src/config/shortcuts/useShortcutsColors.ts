import { useLayoutEffect } from 'react';
const KEYS_CODE = {
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
};
import { colors } from '../colors/colors';
export const useShortcutsColors = ({ changeColor }: any) => {
  useLayoutEffect(() => {
    document.body.addEventListener('keydown', (event) => {
      if (event.ctrlKey && '1'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && '2'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && '3'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && '4'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && '5'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && '6'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && '7'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && '8'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && '9'.indexOf(event.key) !== -1) event.preventDefault();
    });

    document.addEventListener('keyup', (e: any) => {
      if (e.ctrlKey && e.keyCode == KEYS_CODE['1']) changeColor(colors[0]);
      if (e.ctrlKey && e.keyCode == KEYS_CODE['2']) changeColor(colors[1]);
      if (e.ctrlKey && e.keyCode == KEYS_CODE['3']) changeColor(colors[2]);
      if (e.ctrlKey && e.keyCode == KEYS_CODE['4']) changeColor(colors[3]);
      if (e.ctrlKey && e.keyCode == KEYS_CODE['5']) changeColor(colors[4]);
      if (e.ctrlKey && e.keyCode == KEYS_CODE['6']) changeColor(colors[5]);
      if (e.ctrlKey && e.keyCode == KEYS_CODE['7']) changeColor(colors[6]);
      if (e.ctrlKey && e.keyCode == KEYS_CODE['8']) changeColor(colors[7]);
      if (e.ctrlKey && e.keyCode == KEYS_CODE['9']) changeColor(colors[8]);
    });
  }, []);
};
