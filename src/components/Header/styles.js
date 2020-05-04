import styled from 'styled-components';

export const Container = styled.div`
  background-color: #4e90dd;
`;

export const AddressBar = styled.div`
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  span {
    margin-left: 0.3rem;
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: 425px) {
    padding: 0 2rem;
    justify-content: flex-end;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4rem;
  padding: 2rem 0;
  position: relative;

  #logo {
    width: 10rem;
    height: 12rem;
    background-color: #fff;
    border-radius: 0.4rem;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    img {
      width: 100%;
    }

    @media (max-width: 425px) {
      width: 8rem;
      height: 10rem;
    }
    @media (max-width: 320px) {
      width: 6rem;
      height: 8rem;
    }
  }

  @media (max-width: 425px) {
    margin-left: 1rem;
    padding-bottom: 4rem;
    align-items: flex-start;
  }

  @media (max-width: 320px) {
    margin-left: 0.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.3rem;

  color: #fff;
  position: relative;

  #ramo {
    padding: 0.1rem 0;
    font-weight: bold;
    font-size: 1rem;

    @media (max-width: 425px) {
      display: none;
    }
  }

  #nome-empresa {
    font-weight: bold;
    font-size: 2rem;
    @media (max-width: 425px) {
      display: none;
    }
  }
  @media (max-width: 320px) {
    padding-bottom: 2rem;
    padding-top: 0;
  }
`;

export const Contacts = styled.div`
  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;
    align-self: flex-start;
  }
  .telefone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0000004a;
    padding: 0.8rem;
    padding-left: 0;
    color: #fff;

    margin-top: 1rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    position: relative;

    @media (min-width: 375px) {
      margin-right: 1rem;
    }

    .icon {
      background-color: #00000040;
      position: absolute;
      display: flex;
      border-top-left-radius: 0.3rem;
      border-bottom-left-radius: 0.3rem;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 20%;
    }
    span {
      padding-left: 3rem;
    }
  }
`;

export const OpeningHours = styled.div`
  background-color: #fff;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  position: absolute;
  right: 3rem;
  bottom: 0;
  height: 3.8rem;
  padding: 1rem;
  cursor: pointer;

  #icon {
    margin-right: 0.3rem;
  }

  span {
    font-weight: bold;
    color: #c00;
    font-size: 1rem;
  }
  p {
    padding-top: 0.3rem;
    font-size: 1rem;
  }

  @media(max-width: 425px) {
    right: 1rem;
  }
`;

export const Hours = styled.div`
  height: 28rem;
  position: absolute;
  right: 3rem;
  bottom: -28rem;
  background-color: #fff;
  width: 15rem;
  box-shadow: 0px 10px 10px #00000040;
  opacity: ${props => (props.visible ? 1 : 0)};
  z-index: ${props => (props.visible ? 1 : -1)};;
  transition: all 0.4s ease;
  transform-origin: top bottom;

  @media(max-width: 425px) {
    right: 1rem;
  }

  ul {
    list-style: none;
    padding: 1rem;

    li {
      .dia {
        margin-top: 0.4rem;
        font-size: 1.1rem;
        margin-left: 0.4rem;
        margin-bottom: 0.4rem;
        font-weight: normal;
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
