import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';
import store from "./store/store";
import {Router, Route, Switch, Redirect} from 'react-router-dom';

import DefaultLayout from "./components/DefaultLayout";

const history = createBrowserHistory();
const rootElement = document.getElementById('root');

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" name="Home" component={DefaultLayout}/>
        </Switch>
      </Router>
    </Provider>
  )
};

const render = () => {
  ReactDOM.render(<App />, rootElement);
};

store.subscribe(render);
render();
