import './GlobalPreloader.scss';

import Spinner from '../Spinner/Spinner';

const GlobalPreloader = ({ spinnerSize = '150px' }: { spinnerSize?: string }) => {
  return <div className="global-preloader">
    <div className="global-preloader__wrap">
      <Spinner size={spinnerSize} />
    </div>
  </div>
};

export default GlobalPreloader;