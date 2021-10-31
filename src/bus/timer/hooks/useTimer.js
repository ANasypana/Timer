import React, { useState } from 'react';
import { interval } from 'rxjs';


export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [wait, setWait] = useState(0);

  const [subscription, setSubscription] = useState("");
  const [prevent, setPrevent] = useState(true);

  const cleaner = () => {
    subscription.unsubscribe();
    setTimer(0);
    setWait(0);
    setSubscription("");
  }


  const onStartHandler = () => {
    if (!subscription) {
      const timerSubscription = interval(1000)
        .subscribe((v) => {
          setTimer(v + wait);
        });
      setSubscription(timerSubscription);
    } else {
      cleaner();
    }
  };

  const onWaitHandler = (event) => {
    if (prevent) {
      setPrevent(false);
      const timerInstance = setTimeout(() => {
        setPrevent(true);
        clearTimeout(timerInstance);
      }, 300);
    } else {
      if (subscription) {
        subscription.unsubscribe();
      }

      setWait(timer);
      setSubscription("");
    }
  };

  const onResetHandler = () => {
    if (subscription) {
      subscription.unsubscribe();
    }

    const timerSubscription = interval(1000).subscribe((v) => {
      setTimer(v);
    });
    setSubscription(timerSubscription);
  };

  return {onResetHandler, onStartHandler, onWaitHandler, timer, subscription, cleaner}
}