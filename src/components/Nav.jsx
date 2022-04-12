import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

import * as S from './Nav.styles';

const Nav = () => {
    return (
        <S.AsideContainer>
            <S.SlacaLink to="/">
                <S.Slacatext>
                <p>Slaca 2019</p>
                </S.Slacatext>
                <S.SlacaImg src={logo} alt="" />
                <Link />
            </S.SlacaLink>
            <S.Navigation>
                    <a href="/">Apresentação</a>
                    <a href="/">Comitês</a>
                    <a href="/">Autores</a>
                    <a href="/">Eixos temáticos</a>
                    <a href="/trabalhos">Trabalhos</a>
                    <a href="/">Contato</a>
            </S.Navigation>
        </S.AsideContainer>
    );
}

export default Nav;
