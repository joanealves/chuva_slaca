import React from 'react';

import globo from '../assets/globo.svg';
import profile from '../assets/profile.svg';
import notification from '../assets/notification.svg';

import * as S from './Header.styles';

import { Text } from '../styles/global.styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <div>
        <Text>Anais do Simpósio Latino Americano de Ciências de Alimentos</Text>
        <Text fSize="22px">Anais do 13° Simpósio Latino Americano de Ciência de Alimentos</Text>
        <Text>ISSN: 1234-5678</Text>
      </div>
      <S.Language>
        <img src={globo} alt='' width='100%'/>
        <S.Select>
          <option>BR</option>
          <option>US</option>
          <option>PT</option>
        </S.Select>
      </S.Language>
      <S.WelcomeContainer>
        <S.Welcome>
          <Text fSizeMobile="11px">Bem-vindo!</Text>
          <Text fSizeMobile='10px' fSize="12px">alguem12@galascience.com</Text>
        </S.Welcome>
        <S.ProfileImageContainer>
          <S.Profile src={profile} alt="Foto perfil de uma mulher" />
          <S.Notification src={notification} alt="notificação" />
        </S.ProfileImageContainer>
      </S.WelcomeContainer>
    </S.HeaderContainer>
  );
}

export default Header;
