import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
  width: 100%;

  @media (max-width: 425px) {
    padding: 1rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10rem;

    @media (max-width: 1024px) {
      width: 60%;
    }
    @media (max-width: 768px) {
      width: 70%;
    }
    @media (max-width: 425px) {
      width: 94%;
    }
    @media (min-width: 1025px) {
      width: 50%;
    }
    .logo {
      background: #fff;
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 0.4rem;
      box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.3rem;
      img {
        width: 100%;
      }
    }

    button {
      border: none;
      background: #fff;
      height: 2.3rem;
      padding: 0.4rem 3rem;
      border-radius: 2rem;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        margin-right: 0.6rem;
      }
    }
  }
`;
export const CardPedido = styled.div`
  background-color: #fff;
  flex: 1;

  margin-top: 2rem;
  position: absolute;
  top: 9rem;
  padding: 2rem 3rem;
  border-radius: 0.4rem;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.15);

  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 94%;
  }
  @media (min-width: 1025px) {
    width: 50%;
  }

  @media (max-width: 425px) {
    padding: 0.5rem 1rem;
  }
  h1 {
    color: ${colors.primary};
    padding-bottom: 0.4rem;
  }

  ul {
    list-style: none;

    background-color: #f5f5f5;

    li {
      display: flex;
      border-top: 2px solid #ccc;
      flex-direction: column;
      padding: 1rem;
      .titulo {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
        border-bottom: 1px dashed #ccc;
      }
      .detalhes {
        display: flex;
        flex: 1;
        justify-content: space-between;

        .coluna {
          display: flex;
          flex-direction: column;

          align-items: center;

          span {
            align-items: center;
            margin-bottom: 0.3rem;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 1rem;
          }
          p {
            font-weight: bold;
            font-size: 1rem;
            color: #0c0;
          }
          .qtd {
            color: #333;
          }
        }
      }
    }
  }

  .observacoes {
    margin-top: 1rem;
    label {
      font-weight: bold;
      font-size: 1rem;
    }
    textarea {
      border-radius: 0.4rem;
      padding: 1rem;
      width: 100%;
      height: 3.3rem;
      resize: none;
    }
  }

  .totalizadores {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 1rem;

    .coluna {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      font-size: 0.8rem;
      padding: 0.5rem 2rem;

      @media (max-width: 425px) {
        padding: 0 0.4rem;
      }
      border-right: 1px solid #ccc;

      &:last-child {
        border-right: none;
      }
      p {
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
  .entrega {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    .forma-de-entrega {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      .linha {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        background-color: #f3f3f3;
        border: 1px solid #ccc;
        padding: 0.5rem;
        &:first-child {
          margin-right: 1rem;
        }
        label {
          font-size: 1rem;
          margin-right: 0.3rem;
          font-weight: bold;
          color: #333;
        }
        input {
          width: 2rem;
          height: 1.5em;
        }
      }
    }
    .titulo {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;

      h3 {
        width: max-content;

        color: ${colors.primary};
      }
    }
  }

  .endereco {
    display: flex;
    flex-direction: column;

    .coluna {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 425px) {
      }
      input {
        padding: 1rem 1rem;
        border-radius: 0.4rem;
        border: 1px solid #ccc;
        margin-right: 1rem;
        margin-bottom: 1rem;

        @media (max-width: 425px) {
          margin-bottom: 0.5rem;
          margin-right: 0.5rem;
        }
      }

      .nome {
        flex: 1;
      }
      .cep {
        width: 8rem;
        @media (max-width: 375px) {
          flex: 1;
        }
      }
      .numero {
        width: 5rem;
        margin-right: 0;
        @media (max-width: 425px) {
          align-self: flex-start;
          /* flex: 1; */
        }
      }
    }
  }
  .pagamento {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;

      h3 {
        width: max-content;

        color: ${colors.primary};
      }
    }

    .formas {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      .linha {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        background-color: #f3f3f3;
        border: 1px solid #ccc;
        padding: 0.5rem;
        &:first-child {
          margin-right: 1rem;
        }
        label {
          font-size: 1rem;
          margin-right: 0.3rem;
          font-weight: bold;
          color: #333;
        }
        input {
          width: 2rem;
          height: 1.5em;
        }
      }
    }
    .troco {
      display: flex;
      margin-top: 1rem;
      justify-content: flex-start;

      input {
        flex: 1;
        padding: 1rem 1rem;
        border-radius: 0.4rem;
        border: 1px solid #ccc;
        
        margin-bottom: 1rem;
      }
    }
  }
  .finalizar {
    margin-top: 2rem;
  }
`;
