import React from 'react';

import GlobalHeader from './GlobalHeader';
import Dashboard from './Dashboard';
import GlobalFooter from './GlobalFooter';

import './../css';

const App = () => (
  <React.Fragment>
    <GlobalHeader />
    <Dashboard />
    <GlobalFooter />
  </React.Fragment>
);

export default App;