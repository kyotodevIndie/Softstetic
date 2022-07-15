import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/globals.sass'
import { Layout } from '../components/Layout'
import { useRouter } from 'next/router'
import { AuthProvider } from '../context/AuthContext'

const MyApp = ({ Component, pageProps }) => {
  const routeProps = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Layout useLayout={routeProps.pathname !== '/login' && true}>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
