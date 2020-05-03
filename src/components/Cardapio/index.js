import React from 'react';

import { Container } from './styles';

function Cardapio({ categoria, lista = [] }) {
  return (
    <Container>
      <h2 id={categoria}>{categoria}</h2>
      <ul className="lista-por-categoria">
        {lista.map(produto => (
          <li>
            <div className="detalhes">
              <span className="titulo">{produto.titulo}</span>
              <span className="descricao">{produto.descricao}</span>
            </div>
            <div className="controles">
              <span className="preco">R$ {produto.preco}</span>
              <div className="botoes">
                <button className="menos">-</button>
                <input />
                <button className="mais">+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Cardapio;
