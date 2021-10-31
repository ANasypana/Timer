import React, {useEffect} from 'react';
import { useTimer } from './hooks/useTimer';
import { numberIntoTime } from '../../common/utils/numberIntoTime';

export const Timer = () => {
  const { onResetHandler, onStartHandler, onWaitHandler, timer, subscription, cleaner } = useTimer();
  const { hour, min, sec } = numberIntoTime(timer)
  const startedBtn = !subscription ? 'Start' : 'Stop';

  useEffect(() =>{
    return () => cleaner()
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
          onClick={onStartHandler}
        >
          {startedBtn}
        </button>
        <button
          className='btn'
          disabled={!subscription}
          onClick={onWaitHandler}
        >
          Wait
        </button>
        <button
          className='btn'
          disabled={!subscription}
          onClick={onResetHandler}
        >
          Reset
        </button>

      </div>
    </div>
  )
}