import React, { useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Cardapio from '../../components/Cardapio';

import cardapio from '../../mocks/cardapio';
import Carrinho from '../../components/Carrinho';

export default function Main() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Header visible={visible} setVisible={setVisible} />
      <Menu setVisible={setVisible} />
      {cardapio.map(item => (
        <Cardapio setVisible={setVisible}  key={item.categoira} categoria={item.categoira} lista={item.produtos} />
      ))}
      <Carrinho />
    </div>
  );
}
