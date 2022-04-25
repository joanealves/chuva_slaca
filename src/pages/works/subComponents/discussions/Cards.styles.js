import styled from 'styled-components'

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
`

const viewAuthorAnswer = `
    border-radius: 4px 4px 0 0;
    border-bottom: unset;
    box-shadow-bottom: unset;
`

export const CardContainer = styled.div`
    border: 1px solid #E7E7E7;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 10px;
    width: -webkit-fill-available;
    position: relative;

    background: ${props => props.isBlur ? '#f1f0f0' : '#FFFFFF'};
    ${props => props.viewAuthorAnswer && viewAuthorAnswer};

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

export const Blur = styled.div`
    filter: ${props => props.isBlur && `blur(2px)`};
`

export const AuthorAnswerContainer = styled.div`
    background: #F8F8F8;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    margin-top: -10px;
    padding: 17px 24px;
    border-radius: 0 0 4px 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
    box-shadow-top: unset;
`

export const AuthorContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 33px;
    width: -webkit-fill-available;
    position: relative;
`

export const AuthorAnswer = styled.p`
    left: 0;
    position: absolute;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: var(--gray-details);
`

export const Author = styled.p`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: var(--text-orange);
`

export const Input = styled.input`
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    height: 30px;
    width: -webkit-fill-available;
    margin-bottom: 5px;
    font-size: 14px;
    padding: 5px ;
`

export const EditTopicContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const CheckIconContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 8px;
   width: inherit;
   position: absolute;
   top: 4px;
   z-index: 10333;
`

export const ButtonLike = styled.button`
    background: var(--text-orange);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 2px;
    border: unset;
    width: 27px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
`