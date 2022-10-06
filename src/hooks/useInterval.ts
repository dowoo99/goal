import React, { useRef, useEffect } from 'react';

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<any>(0);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
