import { useLayoutEffect } from 'react';
const KEYS_CODE = {
  '+': 187,
  '-': 189,
};
export const useShortcuts = ({ decrementLineWidth, incrementLineWidth }: any) => {
  useLayoutEffect(() => {
    document.body.addEventListener('keydown', (event) => {
      if (event.ctrlKey && '+'.indexOf(event.key) !== -1) event.preventDefault();
      if (event.ctrlKey && '-'.indexOf(event.key) !== -1) event.preventDefault();
    });

    document.addEventListener('keyup', (e: any) => {
      if (e.ctrlKey && e.keyCode == KEYS_CODE['+']) incrementLineWidth();
      if (e.ctrlKey && e.keyCode == KEYS_CODE['-']) decrementLineWidth();
    });
  }, []);
};
