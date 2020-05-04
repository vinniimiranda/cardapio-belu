import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Container, Card, Hours } from './styles';
import atendimento from '../../mocks/atendimento';
import { situacaoDia } from '../../utils/datas';

function Modal() {
  const { funcionando } = situacaoDia();
  const [open, setOpen] = useState(false);
  const dia = moment().format('dddd');

  useEffect(() => {
    const closed = localStorage.getItem('closeModal');
    if (!funcionando && closed != dia) {
      setOpen(true);
    }
  }, []);

  function closeModal() {
    localStorage.setItem('closeModal', dia);
    setOpen(false);
  }
  return (
    <Container open={open}>
      <Card>
        <button onClick={closeModal}>Close</button>
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
