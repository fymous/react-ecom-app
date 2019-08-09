import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

const HatsPage =() => (
  <div>
    hats page
  </div>
)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } ></Route>
          <Route path='/shop' component={ShopPage} ></Route>
          <Route path='/signin' component={SignInAndSignUpPage} ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
