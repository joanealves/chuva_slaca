import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --background-hover: #FDF1EB;
        --background-border-left: linear-gradient(180deg, #FFB455 0%, #ED7839 100%);
        --text-orange: #ED7839;   
        --orange: #F48F44;   
        --background-main: #E5E5E5;
        --brown-aside: #725C5C;
        --gray-titles: #4E4E4E;
        --gray-details:#5C5C5C;
        --graySugest: #595959;
        --grayDetails2: #707070;
        --grayDetails3: #ADA0A0;
        --grayLike:  #757575;
        --grayProfile: #333333;
        --textCards: #4D4D4D;
        --hoverAside:  #FDF1EB;
        --backgroundHeader: #FDF1EB;
        --backgroundH3: #ECECEC;
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
        font-family: 'Quicksand', sans-serif;
    }

    button {
        cursor: pointer;
    }
`

export const Text = styled.p`
    font-size: ${props => (props.fSizeMobile ? props.fSizeMobile : '12px')};
    font-weight: ${props => (props.fBold ? 'bold': 'normal')};
    color: ${props => (props.textColor ? props.textColor  : 'var(--gray-details)')};
    margin: ${props => (props.margin ? props.margin  : 'unset')};

    @media (min-width:600px) {
    font-size: ${props => (props.fSize ? props.fSize : '14px')};
    }
`

export const Span = styled.span`
    font-size: ${props => (props.fSizeMobile ? props.fSizeMobile : '12px')};
    font-weight: ${props => (props.fBold ? 'bold': 'normal')};
    color: ${props => (props.textColor ? props.textColor  : 'var(--textCards)')};

    @media (min-width:600px) {
         font-size: ${props => (props.fSize ? props.fSize : '14px')};
    }
`

export const TitletWrapper = styled.div`
    background-color: var(--background-hover);
    color: var(--gray-titles);
    padding: 11px 15px 9px;
`

export const SubTitle = styled.h2`
    color: var(--text-orange);
    font-size: ${props => (props.fSizeMobileSub ? props.fSizeMobileSub : '14px')};
    font-weight: ${props => (props.fBold ? 'bold': 'normal')};

    @media (min-width:600px) {
        font-size: ${props => (props.fSize ? props.fSize : '16px')};
    }
`

export const Label = styled.label`
    color: var(--text-orange);
    font-size: ${props => (props.fSizeMobileSub ? props.fSizeMobileSub : '14px')};
    font-weight: ${props => (props.fBold ? 'bold': 'normal')};
    display: block;

    @media (min-width:600px) {
        font-size: ${props => (props.fSize ? props.fSize : '16px')};
    }
`

export const TextTitle = styled.h3`
    font-size: 14px;
    color: var(--gray-titles);

    @media (min-width:600px) {
        font-size: 20px;
    }
`

export const WrapperContent = styled.div`
    padding: 10px;

    @media (min-width:600px) {
        padding: 15px;
    }
`
// TODO: refatorar todos os buttos para o global
export const Button = styled.button`
    width: ${props => (props.widthDefault ? props.widthDefault : '133px')};
    height: 32px;
    background: ${props => (props.bg ? props.bg : 'linear-gradient(180deg, #FEB254 0%, #F0813D 100%)')};
    box-shadow: ${props => (props.shadow ? props.shadow : ' 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)')};
    border-radius: ${props => (props.borderRadius ? props.borderRadius : '4px')};
    border: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 13px 7px;
    margin: 0 auto;
    margin-top: -18px;
    color: ${props => (props.textColor ? props.textColor  : 'var(--shape)')};
    text-decoration: ${props => props.decoration && 'underline'};
    font-weight: 700;
    font-size: 15px;
    
`
// TODO: refatorar todos os ShareContainer para o global
export const ShareContainer = styled.div`
   border-bottom: 1px solid #E7E7E7;
   padding-bottom: 31px;
   text-align: ${props => (props.alignCenter ? props.alignCenter : 'unset')};
`