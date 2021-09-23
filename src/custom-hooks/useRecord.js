/* eslint-disable max-len */
import { useState } from 'react';

export const useRecord = (initialColor = '#00FF00') => {
  const [current, setCurrent] = useState(initialColor);
  const [history, setHistory] = useState([initialColor]);
  const [currentIndex, setIndex] = useState(0);

  const record = (brandNewColor) => {
    const Index = currentIndex + 1;
    history.splice(Index, 0, brandNewColor);
    setIndex(Index);
    setCurrent(brandNewColor);
    setHistory(history);
  };

  const undo = () => {
    if(currentIndex > 0) {
      const prev = history[currentIndex - 1];
      setCurrent(prev);
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  const redo = () => {
    const previousHistory = history.slice();
    if(currentIndex < (previousHistory.length - 1)) {
      const target = history[currentIndex + 1];
      setCurrent(target);
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return { current, undo, redo, record };
};
