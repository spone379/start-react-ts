import React from 'react';

import { ISomeContainerProps } from './SomeContainer.types';

const SomeContainer = (props: ISomeContainerProps) => {
  const { a = 1 } = props;

  console.log('SomeContainer Render');
  return (
    <div>
      SomeContainer
      <p>{a}</p>
    </div>
  );
};

export default SomeContainer;
