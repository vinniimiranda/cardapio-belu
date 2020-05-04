import moment from 'moment';
import atendimento from '../mocks/atendimento';

export function situacaoDia() {
  try {
    const dia = moment().format('dddd');
    const horarioDia = atendimento.find(d => d.day === dia);
    const [inicio, fim] = horarioDia.horario.split(' às ');
    const funcionando = moment().isBetween(
      moment({ hours: inicio, minutes: inicio.slice(-2) }),
      moment({ hours: fim, minutes: fim.slice(-2) })
    );

    const abreAmanha = moment().isAfter(
      moment({ hours: fim, minutes: fim.slice(-2) })
    );

    return { funcionando, abreAmanha, dia: abreAmanha ? moment().add(1, 'day').format('dddd') : dia };
  } catch (error) {
    console.log(error);

    return false;
  }
}
