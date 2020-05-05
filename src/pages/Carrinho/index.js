import React, { useContext } from 'react';

import { Container, CardPedido } from './styles';
import CarrinhoContext from '../../CarrinhoContext';
import { Continue } from '../../components/Carrinho/styles';
import { FaArrowLeft } from 'react-icons/fa';

function Carrinho({ history }) {
  const { total, quantidade, produtos } = useContext(CarrinhoContext);
  function goBack() {
    history.push('/');
  }
  if (quantidade === 0) {
    goBack();
  }

  function formatoBRL(valor) {
    return valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return (
    <Container>
      <div className="header">
        <div className="logo">
          <img
            src="http://www.belucafeteria.com.br/img/Figura28.png"
            alt="Logo"
          />
        </div>
        <button onClick={goBack}>
          <FaArrowLeft size={13} color="#333" />
          Voltar
        </button>
      </div>

      <CardPedido>
        <h1>SEU PEDIDO</h1>

        <ul>
          {produtos.map(produto => (
            <li>
              <span className="titulo">{produto.titulo}</span>
              <div className="detalhes">
                <div className="coluna">
                  <span>Preço</span>
                  <p>{formatoBRL(produto.preco)}</p>
                </div>
                <div className="coluna">
                  <span>QTD</span>
                  <p className="qtd">{produto.quantidade}</p>
                </div>
                <div className="coluna">
                  <span>Subtotal</span>
                  <p>{formatoBRL(produto.preco * produto.quantidade)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="observacoes">
          <label>Observações</label>
          <textarea />
        </div>
        <div className="totalizadores">
          <div className="coluna">
            <span>Subtotal</span>
            <p>
              {total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className="coluna">
            <span>Taxa de Entrega</span>
            <p>Consulte</p>
          </div>
          <div className="coluna">
            <span>Total</span>
            <p>
              {total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        </div>
        <div className="entrega">
          <div className="titulo">
            <h3>Informações para entrega</h3>
          </div>

          <div className="endereco">
            <div className="coluna">
              <input placeholder="Nome" className="nome" />
              <input placeholder="CEP" className="cep" />
              <input placeholder="Nº" className="numero" />
            </div>
          </div>
        </div>

        <div className="pagamento">
          <div>
            <h3>Forma de Pagamento</h3>
          </div>
          <div className="formas">
            <div className="linha">
              <input type="radio" name="pagamento" />
              <label>Dinheiro</label>
            </div>
            <div className="linha">
              <input type="radio" name="pagamento" />
              <label>Maquinha</label>
            </div>
          </div>
        </div>

        <div className="finalizar">
          <Continue>
            <button>Fazer pedido via What's App</button>
          </Continue>
        </div>
      </CardPedido>
    </Container>
  );
}

export default Carrinho;
