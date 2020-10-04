/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home';
import AddressFinderScreen from './AddressFinderScreen';
import AddressDisplay from './AddressDisplay';
import AddressInput from './AddressInput';
import LoadingElection from './LoadingElection';
import ElectionsScreen from './ElectionsScreen';
import AboutUser from './AboutUser';
import WriteInfo from './WriteInfo';
import LoadingFinal from './LoadingFinal';
import FinalResults from './FinalResults';
import Sliders from './Sliders';

const App = (props) => {
  return (
    <Router>
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/findlocation" component={AddressFinderScreen} />
              <Route path="/address" component={AddressDisplay} />
              <Route path="/addressinput" component={AddressInput} />
              <Route path="/loading" component={LoadingElection} />
              <Route path="/elections" component={ElectionsScreen} />
              <Route path="/aboutyou" component={AboutUser} />
              <Route path="/write" component={WriteInfo} />
              <Route path="/sliders" component={Sliders} />
              <Route path="/loadingfinal" component={LoadingFinal} />
              <Route path="/results" component={FinalResults} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
      />
    </Router>
  );
};

export default App;
