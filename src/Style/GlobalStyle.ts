import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        //Reset
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
        //Colors
        --strong-cyan: hsl(172, 67%, 45%);
        --very-dark-cyan: hsl(183, 100%, 15%);
        --dark-grayish-cyan: hsl(186, 14%, 43%);
        --grayish-cyan: hsl(184, 14%, 56%);
        --light-grayish-cyan: hsl(185, 41%, 84%);
        --very-light-grayish-cyan: hsl(189, 41%, 97%);
        --white: hsl(0, 0%, 100%);
        //Fonts
        font-family: 'Space Mono', monospace;
        font-size: 62.5%;
    }

    body {
        background: var(--strong-cyan);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`