import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08",  
      "50": "#FFB90880",
    },
    dark: {
      "900": "#000",
      "500": "#47585B",
      "200": "#999",
      "50": "#99999980"
    },
    light: {
      "900": "#FFF",
      "500": "#F5F8FA",
      "200": "#DADADA",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'light.500',
        color: 'dark.500'
      }
    }
  },
})