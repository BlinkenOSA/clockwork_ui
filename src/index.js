import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {Provider} from 'react-redux';
import store from "./store/store";
import {Button} from "antd";


const history = createBrowserHistory();
const rootElement = document.getElementById('root')

const App = () => {
  return (
    <Provider store={store}>
      <Button type="primary">Example button</Button>
    </Provider>
  )
};

const render = () => {
  ReactDOM.render(<App />, rootElement);
};

store.subscribe(render);
render();
