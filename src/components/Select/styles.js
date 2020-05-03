import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 425px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
  }
  @media (min-width: 426px) {
    margin-left: 4rem;
    margin-top: 2rem;
  }
  select {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    background-color: #eee;
    width: 100%;
    font-size: 1rem;
  }
`;
