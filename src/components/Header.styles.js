import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: var(--backgroundHeader);
    grid-area: header;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
 

    @media (min-width:600px) {
         /* height: 68px; */
        }
`

export const Language = styled.div`
    display: flex; 
    width: auto;
    height: 28px;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    background: unset;
    border: unset;
`

export const Select = styled.select`
    background: unset;
    border: unset;
    font-size: 12px;
`

export const WelcomeContainer = styled.div`
    display: flex;
`

export const Welcome = styled.div`
    text-align: right;
`

export const ProfileImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;    
`

export const Profile = styled.img`
    border-radius: 50%;
    width: 30px;
`
export const Notification = styled.img`
    width: 15px;
`
