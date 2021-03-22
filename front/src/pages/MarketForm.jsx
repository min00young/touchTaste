import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import AppContainer from '../containers/common/AppContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import MarketFormList from '../components/marketForm/MarketFormList';
import { checkUserAsync } from '../modules/user';

const MarketForm = () => {

  return (
    <AppContainer>
      <HeaderContainer />
      <MarketFormList />
      <Footer />
    </AppContainer>
  );
};

export default MarketForm;