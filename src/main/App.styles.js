import styled from 'styled-components'

export const AppContainer = styled.div`
    /* display: grid; */
    display: unset;
    grid-template-columns: 100px 1fr;

    grid-template-rows:
        var(--header-height)
        1fr
        var(--footer-height);
    grid-template-areas:
        "aside header"
        "aside content"
        "aside footer";
    height: 100vh;

    @media (min-width: 600px) {
        grid-template-columns: 220px 1fr;
    }

     @media (min-width: 768px) {
        display: grid;
    }
`