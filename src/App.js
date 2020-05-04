import React, { useState } from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';
import CarrinhoContext from './CarrinhoContext';

function App() {
  const [carrinho, setCarrinho] = useState({total: 0.00, quantidade: 0, produtos: []});
  return (
    <>
      <CarrinhoContext.Provider value={{ ...carrinho, setCarrinho }}>
        <Routes />
        <GlobalStyle />
      </CarrinhoContext.Provider>
    </>
  );
}

export default App;
