import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem 0.5rem;

  @media (min-width: 426px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  h2 {
    font-size: 1.6rem;
    text-align: center;
    /* text-decoration: underline; */
    color: #4e90dd;
    margin-bottom: 1rem;
    border-bottom: 1px dotted #ccc;
  }
  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 1rem;
      /* line-height: 4rem; */
      border-bottom: 1px solid #ccc;
      font-size: 1rem;
      font-weight: bold;

      .detalhes {
        flex: 1;
        display: flex;
        flex-direction: column;
        .titulo {
          line-height: 1rem;
          text-transform: uppercase;
        }
        .descricao {
          line-height: 2rem;
          font-size: 12px;
          padding-bottom: 0.4rem;
          font-weight: normal;
        }
      }
      .controles {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 0.5rem;

        @media (min-width: 426px) {
          margin-right: 3rem;
          flex-direction: row;
        }

        .preco {
          color: #0a0;
          margin-right: 1rem;
          margin-bottom: 0.3rem;

          @media (min-width: 426px) {
            margin-right: 3rem;
          }
        }

        .botoes {
          display: flex;
          align-items: center;
          button {
            padding: 0.8rem 1rem;
            font-size: 1.2rem;
            font-weight: bold;
            border: 1px solid #666;
          }
          input {
            padding: 0.85rem;
            text-align: center;
            color: #000;
            font-size: 1.1rem;
            border: 1px solid #ccc;
            width: 3rem;
            @media (min-width: 426px) {
              width: 5rem;
            }
          }
          .menos {
            border-top-left-radius: 0.4rem;
            border-bottom-left-radius: 0.4rem;
          }
          .mais {
            border-top-right-radius: 0.4rem;
            border-bottom-right-radius: 0.4rem;
          }
        }
      }
    }
  }
`;
