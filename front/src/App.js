import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './components/common/GlobalStyles';
import Home from './pages/Home';
import Login from './pages/Login';
import MarketForm from './pages/MarketForm';



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <Route path={'/marketForm'} component={MarketForm} />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;