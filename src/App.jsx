import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';

import Book from './views/Book';
import Details from './views/Details';
import './App.css';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AnimatedSwitch atEnter={{opacity: 0}} atLeave={{opacity: 0}} atActive={{opacity: 1}} className="switch-wrapper">
        <Route exact path="/" component={Book} />
        <Route path="/customer/:id" component={Details} />
      </AnimatedSwitch>
    </BrowserRouter>
  );
}
