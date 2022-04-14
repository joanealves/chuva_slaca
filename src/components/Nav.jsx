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
                <Link to="/">Apresentação</Link>
                <Link to="/">Comitês</Link>
                <Link to="/">Autores</Link>
                <Link to="/">Eixos temáticos</Link>
                <Link to="/trabalhos">Trabalhos</Link>
                <Link to="/">Contato</Link>
            </S.Navigation>
        </S.AsideContainer>
    );
}

export default Nav;
