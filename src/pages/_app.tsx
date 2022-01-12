import { ChakraProvider } from "@chakra-ui/react"

import { theme } from "../styles/theme"
import { Header } from "../components/Header"

import "../styles/global.scss"
import "../styles/slider.scss"

import 'swiper/scss'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
