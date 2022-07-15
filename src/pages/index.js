import { Box } from '@chakra-ui/react'
import { parseCookies } from 'nookies'
import React, { useState, useEffect } from 'react'
import { CustomTable } from '../components/Tables/CustomTable'
import { getAPIClient } from '../services/axios'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])
  return <Box>{!isLoading && <CustomTable />}</Box>
}

// export const getServerSideProps = async (ctx) => {
//   const apiClient = getAPIClient(ctx)
//   const { ['nextauth.token']: token } = parseCookies(ctx)

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   await apiClient.get('/users')

//   return {
//     props: {},
//   }
// }

export default HomePage
