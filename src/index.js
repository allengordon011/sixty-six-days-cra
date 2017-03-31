// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import react router deps
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import store from './js/store';
import App from './js/components/App';
import Splash from './js/components/Splash';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route path="/main" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
  )
})
