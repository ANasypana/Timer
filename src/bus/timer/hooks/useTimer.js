import React, {useState, useRef} from 'react';

export const useTimer = () => {
  const intervalRef = useRef();
  const [currentValue, setCurrentValue ] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);

  const _tick = () => setCurrentValue(prevCurrentValue => prevCurrentValue + 1);

  const _clickedIncrease = () => {
    if(clickCounter > 0){
      clearInterval(intervalRef.current);
      setIsStarted(false)
      return
    }
   setClickCounter(prevClickCounter =>  prevClickCounter + 1)
  };

  const _clickedDecrease = () => setClickCounter(prevClickCounter => prevClickCounter - 1);

  const timer = () => {
    let timerId = setInterval(_tick, 1000);
    return timerId
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setCurrentValue(0);
    setIsStarted(false);
    setClickCounter(0);
  };

  const doTimer = () => {
    if(!isStarted){
      setIsStarted(true);
      setClickCounter(0);
      intervalRef.current = timer();

      return
    }
    stop()
  };

  const reset = () => {
    if(isStarted){
      clearInterval(intervalRef.current);
      setCurrentValue(0);
      intervalRef.current = timer();
    }
  };

  const wait = () => {
    _clickedIncrease()
    setTimeout(_clickedDecrease, 300);
  }

  return {currentValue, isStarted, reset, doTimer, stop, wait}
}