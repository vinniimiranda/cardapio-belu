import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaMobileAlt,
  FaClock,
  FaChevronDown,
} from 'react-icons/fa';
import {
  Container,
  AddressBar,
  Brand,
  Info,
  Contacts,
  OpeningHours,
  Hours,
} from './styles';

import atendimento from '../../mocks/atendimento';
import { situacaoDia } from '../../utils/datas';

function Header({ visible, setVisible }) {
  
  const { funcionando, abreAmanha, dia } = situacaoDia()

  
  return (
    <Container>
      <AddressBar>
        <FaMapMarkerAlt color="#ccc" size={12} />
        <span>Rua Dr. Pelágio Marques, 272 casa 2 – Vila Matilde – SP</span>
      </AddressBar>
      <Brand>
        <div id="logo">
          <img
            src="http://www.belucafeteria.com.br/img/Figura28.png"
            alt="Logo"
          />
        </div>
        <Info>
          <span id="ramo">Cafeteria</span>
          <h3 id="nome-empresa">Bēllu Cafeteria</h3>

          <Contacts>
            <div className="telefone">
              <div className="icon">
                <FaPhoneVolume size={20} color="#fff" />
              </div>
              <span>(11) 1234-5678</span>
            </div>
            <div className="telefone">
              <div className="icon">
                <FaMobileAlt size={20} color="#fff" />
              </div>
              <span>(11) 98814-7747</span>
            </div>
          </Contacts>
        </Info>
        <OpeningHours onClick={() => setVisible(!visible)} situacaoDia={funcionando}>
          <FaClock size={12} color="#999" id="icon" />
          <span>{!abreAmanha ? 'Estamos abertos' : 'Abriremos amanhã'}</span>
          <p>
            das {atendimento.find(a => a.day === dia).horario}
            <FaChevronDown
              size={10}
              color="#333"
              style={{
                marginLeft: 3,
              }}
            />
          </p>
        </OpeningHours>

        <Hours visible={visible} onBlur={() => setVisible(!visible)}>
          <ul>
            {atendimento.map(dia => (
              <li>
                <h3 className="dia">{dia.dia}</h3>
                <p className="hora">{dia.horario}</p>
              </li>
            ))}
          </ul>
        </Hours>
      </Brand>
    </Container>
  );
}

export default Header;
