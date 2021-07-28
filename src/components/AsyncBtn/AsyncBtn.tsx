import React, { useState, useEffect, useRef } from 'react';

import { usePrevious, useWillUnmount } from '../../hooks';

import './AsyncBtn.scss';
import Spinner from '../Spinner/Spinner';

interface IAsyncBtnProps {
  onClick?: () => Promise<any>;
  className: string;
  pending?: boolean;
  disabled?: boolean;
  spinnerSize?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const AsyncBtn: React.FC<IAsyncBtnProps> = (props) => {
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
      className={`async-btn ${className}`}
      onClick={handleClick}
      disabled={pending || disabled}
    // {...buttonProps}
    >
      {props.children}

      {pending &&
        <div className="async-btn__spinner-wrap">
          <Spinner size={spinnerSize} />
        </div>
      }

    </button>
  );
};

export default AsyncBtn;