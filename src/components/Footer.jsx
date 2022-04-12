import React from 'react';

import galoa from '../assets/galoa.svg';
import { Text } from '../styles/global.styles'

import * as S from './Footer.styles'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.LeftContainer>
        <img
          src={galoa}
          alt="Logo Galoá anais e proceedings"
          with="130px"
          height="60px"
        />
        <S.ButtonSaibamais>Saiba mais</S.ButtonSaibamais>
      </S.LeftContainer>
        <Text>
          <span>Preservar a memória do evento e ampliar o acesso ao conhecimento científico</span>
          <span>gerado em eventos é a razão de ser da plataforma Galoá Proceedings.</span>
          <Text>
            Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a comunidade científica,
            mantendo acesso o debate científico fomentado pelos encontros e aumentando o impacto do evento.
          </Text>
        </Text>
    </S.FooterContainer>
  );
}

export default Footer;
