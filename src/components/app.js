/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MapPage from './MapPage';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={MapPage} />
      </Switch>
    </Router>
  );
};

export default App;
