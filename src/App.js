import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './Home';
import { Product } from './Product';
import { Header } from './Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/product/:productId" component={Product} />
    </BrowserRouter>
  );
}

export default App;
