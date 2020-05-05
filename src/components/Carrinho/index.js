import React, { useContext } from 'react';

import { Container, Cesta, Continue } from './styles';

import { FaShoppingBasket } from 'react-icons/fa';
import CarrinhoContext from '../../CarrinhoContext';
import { situacaoDia } from '../../utils/datas';

function Carrinho({ history }) {
  const { total, quantidade } = useContext(CarrinhoContext);
  const { funcionando } = situacaoDia();
  
  function checkout() {
    if (quantidade > 0 && funcionando) {
      history.push('/checkout');
    } 
    
  }

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
      <Continue disabled={quantidade <= 0 || !funcionando}>
        <button onClick={checkout}>Continuar</button>
      </Continue>
    </Container>
  );
}

export default Carrinho;
