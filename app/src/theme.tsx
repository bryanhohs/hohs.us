import { createTheme, responsiveFontSizes } from '@mui/material'
import { grey } from '@mui/material/colors'

const theme = createTheme({
  modularCssLayers: '@layer theme, base, mui, components, utilities;',
  colorSchemes: {
    light: {
      palette: {
        mode: 'dark',
        background: {
          default: grey[900],
        },
        text: {
          primary: grey[50],
        },
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
      },
    },
  },
  cssVariables: true,
  typography: {
    body1: {
      color: grey[50],
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    body2: {
      color: grey[50],
      fontSize: '1rem',
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    fontFamily: 'var(--font-noto-sans), var(--font-noto-sans-mono)',
    h3: {
      color: grey[50],
      fontSize: '3rem',
      fontStyle: 'normal',
      fontWeight: 900,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h3: 'h3',
          body1: 'div',
          body2: 'div',
        },
      },
    },
  },
})

export default responsiveFontSizes(theme)
