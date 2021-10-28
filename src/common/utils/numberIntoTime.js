export const toStr = number => number < 10 ? `0${number}` : `${number}`;

export const numberIntoTime = numbet => {
  const hour = toStr(Math.floor(numbet / 3600));
  const min = toStr(Math.floor((numbet - hour * 3600) / 60));
  const sec = toStr(Math.floor(numbet - hour * 3600 - min * 60));

  return { hour, min, sec }
}