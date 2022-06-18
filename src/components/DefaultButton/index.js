import { Button } from '@chakra-ui/react'
import React from 'react'

export const DefaultButton = ({
  text,
  colorScheme = 'purple',
  fontSize = 'md',
  ...rest
}) => {
  return (
    <Button colorScheme={colorScheme} fontSize={'sm'} px={6} {...rest}>
      {text}
    </Button>
  )
}
