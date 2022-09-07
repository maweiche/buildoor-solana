import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import WalletContextProvider  from '../components/WalletContextProvider';

const colors ={
  background: "#F9FAFB",
  accent: "#FBBF24",
  bodyText: "rgba(255, 255, 255, 0.8)",
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <WalletContextProvider>
      <Component {...pageProps} />
    </WalletContextProvider>
  </ChakraProvider>
  )
}

export default MyApp
