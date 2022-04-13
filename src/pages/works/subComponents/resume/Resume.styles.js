import styled from 'styled-components'

export const ResumeContainer = styled.div`
    border: 1px solid #ECECEC;
    border-radius: 3px;
`

export const ViewMoreButton = styled.button`
   border: unset;
   background: unset;
   display: inline;
   color: var(--text-orange);
   font-size: 14px;
   transition: 0.2 ease all;

   &:hover {
    font-size: 15px;
   }
`