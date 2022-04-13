import styled from 'styled-components'

export const Form = styled.form`
   position: relative;
`

export const InputContainer = styled.input`
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    height: 39px;
    width: -webkit-fill-available;
    margin-bottom: 5px;
    font-size: 12px;
    padding: 5px ;
    
    @media (min-width:600px) {
        padding: 10px 11px 10px 23px;
    }
`

export const TextArea = styled.textarea`
    width: -webkit-fill-available;
    height: 122px;

    @media (min-width:600px) {
        height: 113px;
    }
`