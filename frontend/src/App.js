import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import NavBar from "./components/NavBar/navbar";
import ProductIndexPage from './components/ProductsIndexPage/ProductsIndexPage';
import Home from './components/Home/Home';
import ProductShowPage from './components/ProductShowPage/ProductShowPage';
import BottomBanner from './components/BottomBanner/BottomBanner';
import SecondNavBar from './components/SecondNavBar/SecondNavBar';
import ThirdNavBar from './components/ThirdNavBar/thirdNavBar';
import CartItems from './components/CartItems/CartItems';

function App() {
  return (
    <>
      <NavBar/>
        <SecondNavBar/>
          <ThirdNavBar />
            <Switch>
              <Route exact path="/login">
                <LoginFormPage />
              </Route>
              <Route exact path="/products/mens">
                <ProductIndexPage/>
              </Route>
              <Route exact path="/signup">
                <SignupFormPage />
              </Route>
              <Route exact path="/products/:productId">
                <ProductShowPage/>
              </Route>
              <Route exact path="/cart">
                <CartItems/>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
      <BottomBanner/>
    </>
  );
}

export default App;
