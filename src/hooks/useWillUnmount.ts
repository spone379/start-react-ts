import { useEffect } from 'react';

export default (fn: () => void) => useEffect(() => () => fn && fn(), []);
