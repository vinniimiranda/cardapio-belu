import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Cardapio from '../../components/Cardapio';

import cardapio from '../../mocks/cardapio';

export default function Main() {
  return (
    <div>
      <Header />
      <Menu />
      {cardapio.map(item => (
        <Cardapio key={item.categoira} categoria={item.categoira} lista={item.produtos} />
      ))}
    </div>
  );
}
