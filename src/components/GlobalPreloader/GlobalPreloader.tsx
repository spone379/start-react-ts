import './GlobalPreloader.scss';
import Spinner from '../Spinner/Spinner';

const GlobalPreloader = () => (
  <div className="global-preloader">
    <div className="global-preloader__wrap">
      <Spinner size="150px" />
    </div>
  </div>
);

export default GlobalPreloader;