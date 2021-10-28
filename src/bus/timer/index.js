import React, {useEffect} from 'react';
import { useTimer } from './hooks/useTimer';
import { numberIntoTime } from '../../common/utils/numberIntoTime';

export const Timer = () => {
  const { currentValue, isStarted, reset, doTimer, stop, wait } = useTimer();
  const { hour, min, sec } = numberIntoTime(currentValue)
  const startedBtn = isStarted ? 'Stop' : 'Start';

  useEffect(() =>{
    return () => stop()
  }, [])

  return(
    <div className='timer'>
      <p className='large'>
        <span>{hour}</span>
        :
        <span>{min}</span>
        :
        <span>{sec}</span>
      </p>
      <div className='btn-container'>
        <button
          className='btn'
          onClick={doTimer}
        >
          {startedBtn}
        </button>
        <button
          className='btn'
          disabled={!isStarted}
          onClick={wait}
        >
          Wait
        </button>
        <button
          className='btn'
          disabled={!isStarted}
          onClick={reset}
        >
          Reset
        </button>

      </div>
    </div>
  )
}