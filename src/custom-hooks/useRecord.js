/* eslint-disable max-len */
import { useEffect, useState } from 'react';

export const useRecord = (initialColor = '#00FF00') => {
  const [current, setCurrent] = useState(initialColor);
  const [history, setHistory] = useState([]);
  const [currentIndex, setIndex] = useState(-1);

  const record = (brandNewColor) => {
    const previousHistory = history.slice();
    setCurrent(brandNewColor);
    setIndex(prevIndex => prevIndex + 1);
    previousHistory[currentIndex] = brandNewColor;
    setHistory(previousHistory);
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

  useEffect(() => {
    record(initialColor);
  }, []);

  return { current, undo, redo, record };
};
