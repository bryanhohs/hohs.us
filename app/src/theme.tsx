'use client';
import { grey } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material';

export const Theme = createTheme({

    colorSchemes: {
        light: true,
        dark: false,
    },
    cssVariables: true,
    palette: {
        mode: 'light',
            action: {
            active: grey[50],
            activatedOpacity: 1,
            hover: grey[50],
            hoverOpacity: 1,
            focus: grey[50],
            focusOpacity: 1,
            selected: grey[50],
            selectedOpacity: 1,
            disabled: grey[50],
            disabledBackground: grey[50],
            disabledOpacity: 1,
            },
        background: {
            default: grey[900],
    },
        text: {
            primary: grey[50],
    },
    },
    typography: {
        fontFamily: 'var(--font-noto-sans), var(--font-noto-sans-mono), sans-serif',
        h3: {
            fontWeight: 900,
            fontSize: '2.5rem',
            color: grey[50],
    },
    },
});

const responsiveTheme = responsiveFontSizes(Theme);

export default responsiveTheme;