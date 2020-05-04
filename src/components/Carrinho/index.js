import React, { useContext } from 'react';

import { Container, Cesta, Continue } from './styles';

import { FaShoppingBasket } from 'react-icons/fa';
import CarrinhoContext from '../../CarrinhoContext';

function Carrinho() {
  const { total, quantidade, setCarrinho } = useContext(CarrinhoContext);
  return (
    <Container>
      <Cesta>
        <div className="cesta">
          <FaShoppingBasket size="2rem" color="#f00" />
          <span className="cesta-detalhes">
            Itens do <b>SEU PEDIDO</b>
          </span>
        </div>
        <span className="total">
          {total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <span className="quantidade">{quantidade}</span>
      </Cesta>
      <Continue>
        <button>Continuar</button>
      </Continue>
    </Container>
  );
}

export default Carrinho;
