import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppContainer from '../containers/common/AppContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import Footer from '../components/common/Footer';
import MarketList from '../components/home/MarketList';
import { checkUserAsync } from '../modules/user';
import MarketIconList from '../components/home/MarketIconList';
import Introduce from '../components/home/Introduce';

const Home = () => {
  const loginState = useSelector(state => state.user.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginState && localStorage.getItem('touchTaste_TOKEN')) {
      dispatch(checkUserAsync(localStorage.getItem('touchTaste_TOKEN')));
    }
  }, [dispatch, loginState]);

  return (
    <AppContainer>
      <HeaderContainer />
      <Introduce />
      <MarketIconList />
      <MarketList />
      <Footer />
    </AppContainer>
  );
};

export default Home;