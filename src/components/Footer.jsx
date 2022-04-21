import React from 'react';

import galoa from '../assets/galoa.svg';
import { Text, Span } from '../styles/global.styles'

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
        <S.ButtonSaibamais>
          <a href="https://galoa.com.br/" target="_blank" rel="noreferrer">Saiba mais</a>
        </S.ButtonSaibamais>
      </S.LeftContainer>
      <div>
        <Span fBold>Preservar a memória do evento e ampliar o acesso ao conhecimento científico </Span>
        <Span>gerado em eventos é a razão de ser da plataforma Galoá Proceedings.</Span>
        <Text>
          Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a comunidade científica,
          mantendo acesso o debate científico fomentado pelos encontros e aumentando o impacto do evento.
        </Text>
      </div>
    </S.FooterContainer>
  );
}

export default Footer;
