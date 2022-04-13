import styled from 'styled-components'

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
`

export const CardContainer = styled.div`
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 10px;

    @media (min-width:600px) {
        padding: 17px 24px;
    }
`

export const DropdowContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;
   margin-top: 14px;
`

export const ButtonLike = styled.button`
    background: #ED7839;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 2px;
    border: unset;
    width: 27px;
    height: 19px;
`