import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import cardapio from '../../mocks/cardapio';

function Select() {
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    if (categoria) {
      window.location.href = `#${categoria}`;
    }
  }, [categoria]);
  return (
    <Container>
      <select value={categoria} onChange={e => setCategoria(e.target.value)}>
        <option value="">Navegar por Categorias</option>
        {cardapio.map(item => (
          <option
            onSelect={e => console.log(e)}
            key={item.categoira}
            value={item.categoira}
          >
            {item.categoira}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default Select;
