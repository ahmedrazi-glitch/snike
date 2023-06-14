import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";

function App() {
  // return (
  //   <Switch>
  //     <Route path="/login">
  //       <LoginFormPage />
  //     </Route>
  //   </Switch>
  // );
  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
    </Switch>
  );
}

export default App;

// function App() {
//   return (  
//     <h1>Hello from App</h1>
//   );
// }

// export default App;
