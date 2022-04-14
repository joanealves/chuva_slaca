import styled from 'styled-components';

export const MainContainer = styled.main`
    grid-area: content;
    display: grid;
    padding: 16px;
    gap: 10px;

    @media (min-width:600px) {
        padding: 20px;
    }

    @media (min-width:1100px) {
        padding: 20px 45px;
        gap: 30px;
    }
`