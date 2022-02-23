import { createGlobalStyle } from "styled-components";
import robotoMono from "../assets/fonts/RobotoMono-VariableFont_wght.ttf";
import ptSerif from "../assets/fonts/PTSerif-Regular.ttf";

export const RootVariables = createGlobalStyle`
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${robotoMono});
    }

    @font-face {
        font-family: 'PT Serif';
        src: url(${ptSerif});
    }

    :root {
        --color-primary: #F1EDE0;
        --color-secondary: #0C0D0D;
        --color-secondary-2: #121212;
        --white: #F5F5F5;
        --orange: #C85311;
        --grey: #4E5555;
        --red: #FF0000;

        --roboto-mono: 'Roboto Mono', sans-serif;
        --pt-serif: 'PT Serif', serif;

        --title-1: 3rem;
        --title-2: calc(var(--title-1) - 0.5rem);
        --title-3: calc(var(--title-2) - 0.5rem);
        --body-1: calc(var(--title-3) - 0.75rem);
        --caption:calc(var(--body-1) - 0.15rem);
    }
`;
