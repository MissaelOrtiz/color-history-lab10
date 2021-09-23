import { useEffect, useState } from 'react';

export const useRecord = (initialColor = '#00FF00') => {
  const [current, setCurrent] = useState(initialColor);
  const [history, setHistory] = useState([]);

  const record = (newColor) => {
    setCurrent(newColor);
  };

  const undo = () => {};

  const redo = () => {};

  useEffect(() => {
    setHistory((previousHistory) => [...previousHistory, current]);
  }, [current]);

  return { current, undo, redo, record };
};
