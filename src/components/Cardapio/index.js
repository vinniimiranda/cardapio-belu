import React, { useContext } from 'react';

import { Container } from './styles';
import CarrinhoContext from '../../CarrinhoContext';
import { situacaoDia } from '../../utils/datas';

function Cardapio({ categoria, lista = [], setVisible }) {
  const { total, quantidade, produtos, setCarrinho } = useContext(
    CarrinhoContext
  );
  const { funcionando } = situacaoDia();

  function adicionaProduto(produto) {
    const productIndex = produtos.findIndex(p => p.titulo === produto.titulo);
    if (productIndex >= 0) {
      setCarrinho({
        produtos: [
          ...produtos.filter(prod => prod.titulo !== produto.titulo),
          {
            ...produtos[productIndex],
            quantidade: produtos[productIndex].quantidade + 1,
          },
        ],
        total: total + produto.preco,
        quantidade: quantidade + 1,
      });
    } else {
      setCarrinho({
        produtos: [...produtos, { ...produto, quantidade: 1 }],
        total: total + produto.preco,
        quantidade: quantidade + 1,
      });
    }
  }

  function removeProduto(produto) {
    const productIndex = produtos.findIndex(p => p.titulo === produto.titulo);
    if (productIndex >= 0) {
      if (produtos[productIndex].quantidade > 1) {
        setCarrinho({
          produtos: [
            ...produtos.filter(prod => prod.titulo !== produto.titulo),
            {
              ...produtos[productIndex],
              quantidade: produtos[productIndex].quantidade - 1,
            },
          ],
          total: total - produto.preco,
          quantidade: quantidade - 1,
        });
      } else {
        setCarrinho({
          produtos: produtos.filter(prod => prod.titulo !== produto.titulo),
          total: total - produto.preco,
          quantidade: quantidade - 1,
        });
      }
    }
  }
  console.log(produtos);

  return (
    <Container onClick={() => setVisible(false)} funcionando={funcionando}>
      <h2 id={categoria}>{categoria}</h2>
      <ul className="lista-por-categoria">
        {lista.map(produto => (
          <li key={produto.titulo}>
            <div className="detalhes">
              <span className="titulo">{produto.titulo}</span>
              <span className="descricao">{produto.descricao}</span>
            </div>
            <div className="controles">
              <span className="preco">
                {produto.preco.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
              <div className="botoes">
                <button
                  className="menos"
                  onClick={() => removeProduto(produto)}
                  disabled={!funcionando}
                >
                  -
                </button>
                <input
                  readOnly
                  value={
                    produtos.find(prod => prod.titulo === produto.titulo)
                      ? produtos.find(prod => prod.titulo === produto.titulo)
                          .quantidade
                      : 0
                  }
                />
                <button
                  className="mais"
                  onClick={() => adicionaProduto(produto)}
                  disabled={!funcionando}
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Cardapio;
