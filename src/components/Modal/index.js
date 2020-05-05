import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Container, Card, Hours } from './styles';
import atendimento from '../../mocks/atendimento';
import useModalHook from '../../hooks/modalHook';

function Modal() {
  const { open, closeModal } = useModalHook();
  
  return (
    <Container open={open}>
      <Card>
        <button className="close" onClick={closeModal}>X</button>
        <h1>Horário de funcionamento</h1>

        <h2>
          No momento estamos fechados, mas verifique os hoários abaixo para um
          próximo pedido.
        </h2>

        <Hours visible={true}>
          <ul>
            {atendimento.map(dia => (
              <li>
                <h3 className="dia">{dia.dia}</h3>
                <p className="hora">{dia.horario}</p>
              </li>
            ))}
          </ul>
        </Hours>
      </Card>
    </Container>
  );
}

export default Modal;
