import styled from 'styled-components'

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 960px) {
      
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 357px;
    }

    @media (min-width:1300px) {
         height: 494px;
    }

    @media (min-width:1500px) {
        height: unset;
    }
`

export const ScroolContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #ECECEC;
    border-radius: 0 0 3px 3px;
    padding: 10px;
    max-height: 250px;

    @media (min-width:1300px) {
        max-height: 385px;
    }
`

export const Scrool = styled.div`
    height: -webkit-fill-available;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width:1300px) {
        gap: 20px
    }
`

export const Content = styled.div`
    width: -webkit-fill-available;

    @media (min-width:960px) {
        width: 70%;
    }

    @media (min-width:1100px) {
        width: 60%;
    }

    @media (min-width:1100px) {
        width: 114%;
    }
`

export const OrangeTextTitle = styled.h1`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: var(--text-orange);
    font-weight: 900;
    margin-bottom: 10px;

    @media (min-width:600px) {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 19px;
        letter-spacing: 0.05em;
    }
`

export const OrangeSubTitle = styled.h1`
    font-family: 'Roboto';
    font-size: 12px;
    color: var(--text-orange);
    padding-bottom: 10px;
    font-weight: 500;

    @media (min-width:960px) {
        text-align: end;
        font-size: 14px;
        line-height: 25px;
        padding-bottom: unset;
    }
`

export const Movie = styled.img`
    width: 100%;


    @media (min-width:768px) {
        width:480px;
    }
    
    @media (min-width:1300px) {
       width: 100%;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: center;
    gap:10px;
    padding: 10px 0;

    @media (min-width:960px) {
        justify-content: flex-end;
        gap: 5px;
        padding: unset;
        margin-bottom: 12px;
    }
`

export const Button = styled.button`
    background: #ED7839;
    border-radius: 4px;
    border: unset;
    color: #FFFFFF;
    font-size: 12px;
    padding: revert;
    display: flex;
    align-items: center;
    width: 105px;
    justify-content: center;
`

export const StarDoiContainer = styled.div`
    background: var(--text-orange);
    border-radius: 4px;
    border: unset;
    width: 43px;
    height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
`