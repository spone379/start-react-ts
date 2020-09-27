import useDidUpdate from './useDidUpdate';

export default (fn: () => any, ms: number, args: any[]) => {
  useDidUpdate(() => {
    const handle = setTimeout(fn.bind(null, args), ms);

    return () => {
      clearTimeout(handle);
    };
  }, args);
};