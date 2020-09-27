export default (fn: Function, time: number) => {
  let isThrottled: boolean = false;
  let isFirstCall: boolean = true;

  return function (this: Function) {
    const args = arguments;

    if (isFirstCall) {
      isFirstCall = false;
      return fn.apply(this, args);
    }

    if (isThrottled) return;

    isThrottled = true;

    setTimeout(() => {
      fn.apply(this, args);
      isThrottled = false;
    }, time);
  }
};