import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />

    <Footer />
  </Router>
);

export default App;
