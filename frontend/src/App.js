import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import NavBar from "./components/NavBar/navbar";
import ProductsIndexCom from './components/ProductsIndexComponent/productsIndexCom';
import ProductIndexItem from './components/ProductIndexItem/ProductIndexItem';
import BottomBanner from './components/BottomBanner/BottomBanner';

function App() {
  return (
    <>
      <NavBar />

      

        <Switch>

          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/products/:productId">
            <ProductIndexItem/>
            <BottomBanner/>
          </Route>
          <Route exact path="/">
            <ProductsIndexCom/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
