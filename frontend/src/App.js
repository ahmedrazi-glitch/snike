import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import NavBar from "./components/NavBar/navbar";
import ProductIndexPage from './components/ProductsIndexPage/ProductsIndexPage';
import ProductsIndexCom from './components/ProductsIndexComponent/productsIndexCom';
import ProductShowPage from './components/ProductShowPage/ProductShowPage';
import BottomBanner from './components/BottomBanner/BottomBanner';
import SecondNavBar from './components/SecondNavBar/SecondNavBar';

function App() {
  return (
    <>
      <NavBar/>
        <SecondNavBar/>
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
            <Route exact path="/">
              <ProductsIndexCom/>
            </Route>
          </Switch>
      <BottomBanner/>
    </>
  );
}

export default App;
