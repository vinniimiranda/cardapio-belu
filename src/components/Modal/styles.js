import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.55);
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  width: 37%;
  border-radius: 0.4rem;
  margin: auto;
  margin-top: 2rem;
  padding: 1rem 2rem;

  h1 {
    font-size: 2rem;

    color: #c00;
    padding-bottom: 0.5rem;
    border-bottom: 4px solid #0c0;
  }
  h2 {
    margin-top: 1rem;
    text-align: center;
    font-weight: normal;
  }
`;

export const Hours = styled.div`
  height: 28rem;
  background-color: #fff;
  width: 100%;
  border-radius: 0.4rem;

  transition: all 0.4s ease;
  transform-origin: top bottom;

  @media (max-width: 425px) {
    right: 1rem;
  }

  ul {
    list-style: none;
    padding-top: 1rem;

    li {
      .dia {
        margin-top: 0.4rem;
        font-size: 1.1rem;

        margin-bottom: 0.4rem;
        font-weight: normal;
        text-transform: capitalize;
      }
      .hora {
        background-color: #ddd;
        width: max-content;
        padding: 0.2rem;
        border: 1px solid #ccc;
        border-radius: 0.4rem;
        margin-bottom: 0.4rem;
        font-size: 10px;
      }
      border-bottom: 1px solid #ccc;
    }
  }
`;
