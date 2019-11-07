import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

// Components
import Welcome from "features/pages/WelcomePage";
import SignIn from "features/pages/SignIn";
import NavBar from "shared-components/NavBar/NavBar";

// Utils
import configureStore, { history } from "utils/configureStore";

import "typeface-roboto";

const store = configureStore({});

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavBar />
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/" render={() => <SignIn />} />
            <Route path="/welcome" render={() => <Welcome />} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
