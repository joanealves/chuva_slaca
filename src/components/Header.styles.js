import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: var(--backgroundHeader);
    grid-area: header;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 5px 50px;
    justify-content: flex-end;
 
    @media (min-width:1250px) {
         height: 68px;
         align-content: center;
         justify-content: space-between;
         align-items: center;
        }
`

export const TextContainer = styled.div`
    width: -webkit-fill-available;

    @media (min-width: 1250px) {
        width: unset;
    }
`

export const Language = styled.div`
    display: flex; 
    align-items: center;
    justify-content:center;
    width: auto;
    height: 28px;
    border: 1px solid #CCCCCC;
    border-radius: 3px;

    @media (min-width: 600px) {
        width: 97px;
        height: 34px;
    }
`

export const Select = styled.select`
    background: unset;
    border: unset;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
`

export const WelcomeContainer = styled.div`
    display: flex;
    gap: 5px;
`

export const Welcome = styled.div`
    text-align: right;
`

export const ProfileImageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;    
    position: relative;
`

export const Profile = styled.img`
    border-radius: 50%;
    width: auto;
`
export const Notification = styled.img`
    width: 10px;
    position: absolute;
    right: -3px;
    top: -3px;
`
