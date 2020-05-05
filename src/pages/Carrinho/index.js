import React, { useContext, useState } from 'react';

import { Container, CardPedido } from './styles';
import CarrinhoContext from '../../CarrinhoContext';
import { Continue } from '../../components/Carrinho/styles';
import { FaArrowLeft } from 'react-icons/fa';

function Carrinho({ history }) {
  const { total, quantidade, produtos } = useContext(CarrinhoContext);
  const [obs, setObs] = useState();
  const [nome, setNome] = useState();
  const [cep, setCep] = useState();
  const [numero, setNumero] = useState();
  const [troco, setTroco] = useState();

  const [formaDeEntrega, setFormaDeEntrega] = useState();
  const [formaDePagamento, setFormaDePagamento] = useState();
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

  function fazerPedido() {
    let mensagem = '';
    produtos.forEach(produto => {
      mensagem += `${produto.quantidade} - ${produto.titulo} \n`;
    });
    if (!formaDeEntrega) {
      return alert('Selecione forma de Entrega');
    }
    if (formaDeEntrega === 'entrega') {
      if (!nome) {
        return alert('Digite seu nome');
      }
      if (!cep) {
        return alert('Digite seu CEP');
      }
      if (!numero) {
        return alert('Digite o número do endereço');
      }
      mensagem += `Nome: ${nome} \nCEP: ${cep} \nNº: ${numero}\n`;
    } else {
      mensagem += `Forma de Entrega: Retirar no Local\n`;
    }
    if (!formaDePagamento) {
      return alert('Escolha a forma de Pagamento');
    }
    if (formaDePagamento === 'dinheiro') {
      if (!troco) {
        return alert('Digite o valor do troco');
      } else {
        mensagem += `Troco para ${formatoBRL(troco)}\n`;
      }
    } else {
      mensagem += `Máquininha\n`;
    }

    if (obs) {
      mensagem += `Observação: ${obs}\n`;
    }
    mensagem = window.encodeURIComponent(mensagem)

    window.open(`whatsapp://send?phone=5511988147747&text=${mensagem}&source=&data=&app_absent=`)
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
          <textarea onChange={e => setObs(e.target.value)} value={obs} />
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
          <div className="forma-de-entrega">
            <div className="linha">
              <input
                type="radio"
                name="entrega"
                onChange={e => setFormaDeEntrega('entrega')}
              />
              <label>Entrega</label>
            </div>
            <div className="linha">
              <input
                type="radio"
                name="entrega"
                onChange={e => setFormaDeEntrega('retirada')}
              />
              <label>Retirar no local</label>
            </div>
          </div>
          {formaDeEntrega === 'entrega' && (
            <div>
              <div className="titulo">
                <h3>Informações para entrega</h3>
              </div>

              <div className="endereco">
                <div className="coluna">
                  <input
                    placeholder="Nome"
                    className="nome"
                    onChange={e => setNome(e.target.value)}
                    value={nome}
                  />
                  <input
                    placeholder="CEP"
                    className="cep"
                    onChange={e => setCep(e.target.value)}
                    value={cep}
                  />
                  <input
                    placeholder="Nº"
                    className="numero"
                    onChange={e => setNumero(e.target.value)}
                    value={numero}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pagamento">
          <div>
            <h3>Forma de Pagamento</h3>
          </div>
          <div className="formas">
            <div className="linha">
              <input
                type="radio"
                name="pagamento"
                onChange={() => setFormaDePagamento('dinheiro')}
              />
              <label>Dinheiro</label>
            </div>
            <div className="linha">
              <input
                type="radio"
                name="pagamento"
                onChange={() => setFormaDePagamento('maquininha')}
              />
              <label>Maquinha</label>
            </div>
          </div>

          {formaDePagamento === 'dinheiro' && (
            <div className="troco">
              <input
                placeholder="Valor para troco"
                onChange={e => setTroco(e.target.value)}
                value={troco}
              />
            </div>
          )}
        </div>

        <div className="finalizar">
          <Continue>
            <button onClick={fazerPedido}>Fazer pedido via What's App</button>
          </Continue>
        </div>
      </CardPedido>
    </Container>
  );
}

export default Carrinho;
