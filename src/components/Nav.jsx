import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux'
import { useAppDispatch } from '../data/store'
import { setMenu, setIsOverlay } from '../main/state/SlacaSlice'
import { selectSlacaSliceData } from '../main/state/SlacaSlice'

import logo from '../assets/logo.svg';
import { IoIosClose } from "react-icons/io";

import * as S from './Nav.styles';

const Nav = () => {
  const dispatch = useAppDispatch()
  const { menu } = useSelector(selectSlacaSliceData)

  const isPath = (path) => {
    return path === '/'
      ? window.location.href === "http://localhost:3000/"
      : window.location.pathname.includes(path)
  }

  return (
    <S.AsideContainer menu={menu}>
      <S.SlacaLink to="/">
        <S.Slacatext menu={menu}>
          <p>SLACA 2019</p>
        </S.Slacatext>
        <S.SlacaImg src={logo} alt="" />
        <Link />
      </S.SlacaLink>
      <S.Navigation>
        <S.NavigationLink
          to="/"
          active={isPath('/')}
          onClick={() => {
            dispatch(setIsOverlay(false))
            dispatch(setMenu(false))
          }}
        >Apresentação
        </S.NavigationLink>
        <S.NavigationLink
          to="/"
          onClick={() => {
            dispatch(setIsOverlay(false))
            dispatch(setMenu(false))
          }}
        >
          Comitês
        </S.NavigationLink>
        <S.NavigationLink
          to="/"
          onClick={() => {
            dispatch(setIsOverlay(false))
            dispatch(setMenu(false))
          }}
        >
          Autores
        </S.NavigationLink>
        <S.NavigationLink
          to="/"
          onClick={() => {
            dispatch(setIsOverlay(false))
            dispatch(setMenu(false))
          }}
        >
          Eixos temáticos
        </S.NavigationLink>
        <S.NavigationLink
          to="/trabalhos"
          active={isPath('/trabalhos')}
          onClick={() => {
            dispatch(setIsOverlay(false))
            dispatch(setMenu(false))
          }}
        >
          Trabalhos
        </S.NavigationLink>
        <S.NavigationLink
          to="/"
          onClick={() => {
            dispatch(setIsOverlay(false))
            dispatch(setMenu(false))
          }}
        >
          Contato
        </S.NavigationLink>
      </S.Navigation>
      <S.IoIosCloseContainer onClick={() => {
        dispatch(setIsOverlay(false))
        dispatch(setMenu(false))
      }}
      >
        <IoIosClose color="#ED7839" size="2em" />
      </S.IoIosCloseContainer>
    </S.AsideContainer >
  );
}

export default Nav;
