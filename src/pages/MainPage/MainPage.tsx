import React from 'react';

import './MainPage.scss';
import SomeContainer from '../../containers/SomeContainer/SomeContainer';

const MainPage = () => {
  return (
    <div className="main-page" >

      <main className="main-page__wrapper" >
        Main Page

        <SomeContainer a={3} />
      </main>
    </div>
  );
}

export default MainPage;