import { useState, useEffect, useRef } from 'react';

import { usePrevious, useWillUnmount } from '../hooks';

import Spinner from './Spinner/Spinner';

interface IAsyncBtnProps {
  onClick?: () => Promise<any>;
  children: JSX.Element | string;
  className: string;
  pending?: boolean;
  disabled?: boolean;
  spinnerSize?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const AsyncBtn = (props: IAsyncBtnProps) => {
  const {
    className,
    spinnerSize,
    onClick,
    pending: pendingFromProps = false,
    disabled,
  } = props;

  const [pending, setPending] = useState(pendingFromProps);

  const prevPendingFromProps = usePrevious(pendingFromProps);

  let isUnmount = useRef(false);

  useEffect(() => {
    if (prevPendingFromProps && !pendingFromProps) {
      setPending(false);
    }
    else if (!prevPendingFromProps && pendingFromProps) {
      setPending(true);
    }
  }, [pendingFromProps]);

  useWillUnmount(() => isUnmount.current = true);

  const handleClick = () => {
    if (onClick && typeof onClick === 'function') {
      setPending(true);

      return onClick()
        .then(() => !isUnmount.current && setPending(false))
        .catch(console.error)
    }
  };

  return (
    <button
      type={props.type}
      className={className}
      onClick={handleClick}
      disabled={pending || disabled}
    >
      {pending
        ? <Spinner size={spinnerSize} />
        : props.children
      }
    </button>
  );
};

export default AsyncBtn;
