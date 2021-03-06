import styled from 'styled-components';
import { Link } from 'react-router-dom';

const isMenu = `
    width: 60%;
    position: fixed;
    min-height: 100vh;
    display:block;
    background: var(--shape);

    @media (min-width: 768px) {
        display: none;
    }
`

export const AsideContainer = styled.aside`
    grid-area: aside;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    z-index: 10;
    display: none;

    @media (max-width: 768px) {
        ${props => props.menu && isMenu}
    }

    @media (min-width:768px) {
        display:block;
    }

    transition: 0.2s ease all;
`

export const Slacatext = styled.div`
    background: var(--backgroundSlaca);
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-weight: 700;
     ${props => props.menu && `display: none`};

    p {
        font-size: 20px;
        
        @media (min-width:600px) {
            font-size: 30px;
        }
    }
`

export const IoIosCloseContainer = styled.button`
    border: unset;
    background: unset;
    right: 0;
    position: absolute;
    top: 0;
    cursor: pointer;

     @media (min-width:768px) {
        display: none;
    }
    
`

export const SlacaLink = styled(Link)`
    color: var(--hoverAside);
    text-decoration: none;
    width: 60%;
    margin: 0 auto;
`

export const SlacaImg = styled.img`
    width: -webkit-fill-available;
`

const isActive = `
   background-color: var(--background-hover);
   border-left: 5px solid  #ED7839;
`

export const Navigation = styled.nav`
    background: var(--gray) ;
    display: grid;   
 
`
export const NavigationLink = styled(Link)`
    padding-left: 24px;
    display: flex;
    align-items: center;
    height: 44px;
    color: var(--brown-aside);
    text-decoration: none;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;

        &:hover {
        border-left: 5px solid  #ED7839;
        background-color: var(--background-hover);
    }

    
        ${props => props.active && isActive}
    
`