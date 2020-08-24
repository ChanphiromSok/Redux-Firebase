import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import store from './components/store/store';
import Routes from './components/routes/index';
import Navigation from './components/layout/navigation';
import Login from './components/pages/Login';
import Register from './components/pages/Register';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navigation />
        <React.Suspense fallback={<h1>Loading....</h1>}>
        <Switch>
          <Route exact={true} component={Login} path="/login" />
          <Route exact={true} component={Register} path="/register" />
          <Routes />
        </Switch>
       </React.Suspense>
     </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
