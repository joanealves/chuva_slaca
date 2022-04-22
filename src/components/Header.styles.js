import styled from 'styled-components'

export const HeaderContainer = styled.header`
    grid-area: header;
    display: flex;
    gap: 15px;
    padding: 20px;
    height: 68px;
    background: var(--backgroundSlaca);
    align-items: center;
    
    @media (min-width:768px) {
        padding: 5px 50px;
         justify-content: space-between;
        flex-wrap: wrap;
         height: unset;
         background: var(--backgroundHeader);
    }
 
    @media (min-width:1300px) {
         height: 68px;
         align-content: center;
         justify-content: space-between;
         align-items: center;
    }
`

export const IoMdMenu = styled.button`
    border: unset;
    background: unset;

    @media (min-width:768px) {
            display: none;
    }
`

export const TextContainer = styled.div`
    width: -webkit-fill-available;
    text-align: center;

    @media (min-width: 768px) {
        width: unset;
         text-align: unset;
    }

    @media (min-width: 1300px) {
        width: unset;
    }
`

export const Language = styled.div`
    display: none;
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

    @media (min-width: 768px) {
       display: flex; 
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
    display: none;
    gap: 5px;

     @media (min-width: 768px) {
       display: flex; 
    }
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
