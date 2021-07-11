import { Link } from 'react-router-dom';

import { ROUTES } from '../../config/constants';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      OOPS, Page Not Found!
      <Link to={ROUTES.main}>Go to the main page</Link>
    </div>
  );
};

export default NotFound;
