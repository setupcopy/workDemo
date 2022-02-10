import React from "react";
import { Home } from "./pages/Home/index";
import { Signup } from "./pages/Signup/index";
import { UserList } from "./pages/UserList/index";
import { Route, Switch, Redirect } from "react-router-dom";
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/users" component={UserList} />
      </Switch>
      <Redirect to="/home" />
    </SnackbarProvider>
  );
}

export default App;
