import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '../data/store'
import { setMenu, setIsOverlay } from '../main/state/SlacaSlice'
import { useSelector } from 'react-redux'
import { selectSlacaSliceData } from '../main/state/SlacaSlice'

import profile from '../assets/profile.svg';
import notification from '../assets/notification.svg';
import GloboIcon from '../assets/icons/GloboIcon';
import { IoMdMenu } from "react-icons/io";

import * as S from './Header.styles';
import { Text } from '../styles/global.styles'

const Header = () => {
  const dispatch = useAppDispatch()
  const { isOverlay } = useSelector(selectSlacaSliceData)


  return (
    <div id="menu">
      <S.HeaderContainer >
        <S.IoMdMenu onClick={() => {
          dispatch(setMenu(true))
          dispatch(setIsOverlay(true))
        }}>
          <IoMdMenu color="#ffff" />
        </S.IoMdMenu>
        <S.TextContainer>
          <Text
            roboto
            none
            margin="0 0 5px 0"
            lineHeight="16px"
            textColor="var(--brown-aside)"
          >
            Anais do Simpósio Latino Americano de Ciências de Alimentos
          </Text>
          <Text
            roboto
            none
            fSize="22px"
            textColor="var(--brown-aside)"
            lineHeight="26px"
          >
            Anais do 13° Simpósio Latino Americano de Ciência de Alimentos
          </Text>
          <Text
            roboto
            textColorMobile="var(--shape)"
            noneDesk
            lineHeight="16px"
          >
            SLACA 2019
          </Text>
          <Text
            roboto
            textColorMobile="var(--shape)"
            textColor="var(--brown-aside)"
            lineHeight="16px"
          >
            ISSN: 1234-5678
          </Text>
        </S.TextContainer>
        <Text textColorMobile="var(--shape)" noneDesk>Login</Text>
        <S.Language>
          <GloboIcon />
          <S.Select>
            <option>PT-BR</option>
            <option>US</option>
          </S.Select>
        </S.Language>
        <S.WelcomeContainer>
          <S.Welcome>
            <Text lineHeight="18px">Bem-vindo!</Text>
            <Text fSize="12px">alguem12@galascience.com</Text>
          </S.Welcome>
          <S.ProfileImageContainer>
            <S.Profile src={profile} alt="Foto perfil de uma mulher" />
            <S.Notification src={notification} alt="notificação" />
          </S.ProfileImageContainer>
        </S.WelcomeContainer>
        <S.Overlay isOverlay={isOverlay}></S.Overlay>
      </S.HeaderContainer>
    </div>
  );
}

export default Header;
