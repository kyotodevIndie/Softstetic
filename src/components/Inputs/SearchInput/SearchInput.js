/* eslint-disable react/no-children-prop */
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

export const SearchInput = () => {
  return (
    <Box
      w={['100%', '100%', '100%', '50%', '50%', '50%']}
      mt="1vh"
      flexDirection={'column'}
    >
      <Text fontSize="xl">Buscar por procedimentos</Text>
      <InputGroup w="100%" mt="1vh">
        <Input placeholder="ex.: Harmonização Facial" />
        <InputRightElement
          children={
            <IconButton
              variant="ghost"
              aria-label="Search database"
              icon={<FiSearch />}
            />
          }
        />
      </InputGroup>
    </Box>
  )
}
