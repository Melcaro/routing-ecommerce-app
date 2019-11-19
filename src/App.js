import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Product } from './Product';
import { Header } from './Header';
import { ProductCategory } from './ProductCategory';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/products/:productId" component={Product} />
        <Route path="/*" component={ProductCategory} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
