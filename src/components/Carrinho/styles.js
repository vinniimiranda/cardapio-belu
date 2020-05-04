import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 6rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  padding: 0.5rem 1rem;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);

  @media (min-width: 426px) {
    padding: 1rem 4rem;
  }
`;

export const Cesta = styled.div`
  background-color: #eee;
  flex: 1;
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  margin-right: 0.7rem;
  position: relative;
  border: 1px solid #ccc;
  box-shadow: 0 2px 0px rgba(0, 0, 0, 0.15);

  @media (min-width: 426px) {
    margin-right: 2rem;
    justify-content: space-between;
    padding: 2rem;
  }
  .cesta {
    display: flex;
    align-items: center;

    .cesta-detalhes {
      margin-left: 0.4rem;
      display: flex;
      flex-direction: column;
      font-size: 1rem;

      @media (max-width: 425px) {
        display: none;
      }
    }
  }
  .total {
    font-weight: bold;
    color: #0a0;
    font-size: 1.2rem;
  }

  .quantidade {
    position: absolute;
    right: -0.3rem;
    top: -0.3rem;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c00;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
  }
`;

export const Continue = styled.div`
  flex: 1;
  
  button {
    box-shadow: 0 2px 0px rgba(0, 60, 0, .35);

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #22a200;
    font-size: 1.3rem;
    padding: 1.3rem;
    font-weight: bold;
    color: #fff;
    border: none;
    border-radius: 0.4rem;
  }
`;
