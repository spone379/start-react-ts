import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../config/constants';

const NotFound = () => {
  return (
    <div>
      OOPS, Page Not Found!
      <Link to={ROUTES.main}>Go to the main page</Link>
    </div>
  );
};

export default NotFound;
