import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Carrinho from './pages/Carrinho';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/checkout" exact component={Carrinho} />
      </Switch>
    </BrowserRouter>
  );
}
