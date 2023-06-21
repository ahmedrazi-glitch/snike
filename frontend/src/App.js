import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import NavBar from "./components/NavBar/navbar";
import ProductsIndexCom from './components/ProductsIndexComponent/productsIndexCom';
import ProductIndexItem from './components/ProductIndexItem/ProductIndexItem';
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
            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path="/products/:productId">
              <ProductIndexItem/>
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
