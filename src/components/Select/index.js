import React from 'react';

import { Container } from './styles';

import cardapio from '../../mocks/cardapio';

function Select() {
  return (
    <Container>
      <select>
        <option>Navegar por Categorias</option>
        {cardapio.map(item => (
          <option key={item.categoira} value={item.categoira}>
            {item.categoira}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default Select;
