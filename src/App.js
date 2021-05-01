import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserListViewScreen from './screens/UserListViewScreen'
import BetListViewScreen from './screens/BetListViewScreen';
import ContestListViewScreen from './screens/ContestListViewScreen';
import TransactionListViewScreen from './screens/TransactionListViewScreen';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/users' component={UserListViewScreen} />
        <Route exact path='/bets' component={BetListViewScreen} />
        <Route exact path='/contests' component={ContestListViewScreen} />
        <Route exact path='/transactions' component={TransactionListViewScreen} />

        {/* Default */}
        <Route component={UserListViewScreen} />
      </Switch>
    </Router>
  );
};

export default () => {
  return (
    <App />
  );
};