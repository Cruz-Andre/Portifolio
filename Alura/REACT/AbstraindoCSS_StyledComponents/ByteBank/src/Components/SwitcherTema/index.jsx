import React from 'react';
import ThemeOn from '../../assets/images/ThemeOn.svg'
import ThemeOff from '../../assets/images/ThemeOff.svg'
import { Icone } from '../UI';

const claro = <Icone src={ThemeOn} alt="Tema Claro" />
const escuro = <Icone src={ThemeOff} alt="Tema Escuro" />

export default ({tema}) => (tema ? escuro : claro)
