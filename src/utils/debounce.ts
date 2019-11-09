export default (fn: (...params: any[]) => void, time: number) => {
  let timeoutId: number = 0;

  return function(...args: any[]) {
    const functionCall = () => fn.call(fn, ...args);

    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(functionCall, time);
  };
};
