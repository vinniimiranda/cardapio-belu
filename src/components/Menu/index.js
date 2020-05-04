import React from 'react';
import Select from '../Select';

import { Container } from './styles';

function Menu({ setVisible }) {
  return (
    <Container onClick={() => setVisible(false)}>
      <Select></Select>
    </Container>
  );
}

export default Menu;
