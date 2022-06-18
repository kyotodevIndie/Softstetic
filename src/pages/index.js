import { Box } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { CustomTable } from '../components/Tables/CustomTable'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])
  return <Box>{!isLoading && <CustomTable />}</Box>
}

export default HomePage
