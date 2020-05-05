import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { situacaoDia } from '../utils/datas';

export default function useModalHook() {
  const [open, setOpen] = useState();
  const { funcionando } = situacaoDia();
  const dia = moment().format('dddd');
  const closed = localStorage.getItem('closeModal');
  const body = document.querySelector('body');

  useEffect(() => {
    if (!funcionando && closed !== dia) {
      body.style = 'overflow-y: hidden;';
      return setOpen(true);
    } else {
      return setOpen(false);
    }
  }, []);
  function closeModal() {
    setOpen(false);
    body.style = 'overflow-y: scroll';
    localStorage.setItem('closeModal', dia);
  }
  return { open, closeModal };
}
