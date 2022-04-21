import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AsideContainer = styled.aside`
    background: var(--gray) ;
    grid-area: aside;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    z-index: 10;
`

export const Slacatext = styled.div`
    background: var(--backgroundSlaca);
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-weight: 700;

    p {
        font-size: 20px;
        
        @media (min-width:600px) {
            font-size: 30px;
        }
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