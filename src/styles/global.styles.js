import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --background-hover: #FDF1EB;
        --background-border-left: linear-gradient(180deg, #FFB455 0%, #ED7839 100%);
        --text-orange: #ED7839;   
        --background-main: #E5E5E5;
        --brown-aside: #725C5C;
        --grey-titles: #4E4E4E;
        --grey-details:#5C5C5C;
        --greySugest: #595959;
        --textCards: #4D4D4D;
        --greyLike:  #757575;
        --hoverAside:  #FDF1EB;
        --greyProfile: #333333;
        --backgroundHeader: #FDF1EB; 
        --backgroundSlaca:linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
        

        --header-heigth: 68px;
        --aside-width: 150px;
        --footer-heigth: 181px;
   }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--shape);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`
export const Text = styled.p`
    font-size: ${props => (props.fSize ? props.fSize : '14px')};
`

export const TextTitle = styled.h3`
    font-size: 20px;
    color: var(--grey-titles);
`