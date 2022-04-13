import styled from 'styled-components'

export const DiscussionsContainer = styled.section`
    border: 1px solid #ECECEC;
    border-radius: 3px;
`

export const DiscussionsImg = styled.div`
    display: flex;
    justify-content: space-around;
`

export const CardsContainer = styled.div`
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
`

export const ShareContainer = styled.div`
   border-bottom: 1px solid #E7E7E7;
   padding-bottom: 31px;
`

export const ButtonTopico = styled.button`
    height: 32px;
    width: 133px;
    background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    border: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 13px 7px;
    margin: 0 auto;
    margin-top: -18px;
    color: var(--shape);
    font-weight: 700;
    font-size: 15px;
`