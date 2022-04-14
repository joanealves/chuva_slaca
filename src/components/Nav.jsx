import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

import * as S from './Nav.styles';

const Nav = () => {

    const isPath = (path) => {
        return path === '/'
            ? window.location.href === "http://localhost:3000/"
            : window.location.pathname.includes(path)
    }


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
                <S.NavigationLink to="/" active={isPath('/')}>Apresentação</S.NavigationLink>
                <S.NavigationLink to="/">Comitês</S.NavigationLink>
                <S.NavigationLink to="/">Autores</S.NavigationLink>
                <S.NavigationLink to="/">Eixos temáticos</S.NavigationLink>
                <S.NavigationLink to="/trabalhos" active={isPath('/trabalhos')} >Trabalhos</S.NavigationLink>
                <S.NavigationLink to="/">Contato</S.NavigationLink>
            </S.Navigation>
        </S.AsideContainer >
    );
}

export default Nav;
