import styled from 'styled-components'

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #ECECEC;
    border-radius: 0 0 3px 3px;
    padding: 10px;
`

export const Content = styled.div`
    /* padding: 10px; */
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
    }
`

export const OrangeSubTitle = styled.h1`
    font-size: 12px;
    color: var(--text-orange);
    padding-bottom: 10px;
`

export const Movie = styled.img`
    width: 100%;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    gap:10px;
    padding: 10px 0;
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