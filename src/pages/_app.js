import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/globals.sass'
import { Layout } from '../components/Layout'
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }) => {
  const routeProps = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <Layout useLayout={routeProps.pathname !== '/login' && true}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
