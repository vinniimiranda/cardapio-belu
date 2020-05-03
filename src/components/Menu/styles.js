import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  background-color: #fff;
  padding-bottom: 1rem;

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
