/* eslint-disable max-len */
import { useEffect, useState } from 'react';

export const useRecord = (initialColor = '#00FF00') => {
  const [current, setCurrent] = useState(initialColor);
  const [history, setHistory] = useState([]);
  const [newColor, setNewColor] = useState();

  const record = (brandNewColor) => {
    setNewColor(brandNewColor);
  };

  const undo = () => {
    const currentIndex = history.indexOf(current);
    const targetIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
    setCurrent(history[targetIndex]);
  };

  const redo = () => {};

  useEffect(() => {
    setHistory((previousHistory) => {
      const currentHistory = previousHistory ? [...previousHistory] : [];
      const currentIndex = !previousHistory ? 0 : Number(previousHistory.indexOf(current) + 1);
      currentHistory.splice(currentIndex, newColor);
    });
  }, [newColor]);

  return { current, undo, redo, record };
};
