import React from 'react';

import './Spinner.scss';

interface ISpinnerProps {
  className?: string;
  size?: string;
  style?: { [key: string]: string }
}

const Spinner = (props: ISpinnerProps) => {
  const {
    size = '14px',
    className = '',
    style = {},
  } = props;

  return (
    <div
      className={`spinner ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    ></div>
  )
};

export default Spinner;