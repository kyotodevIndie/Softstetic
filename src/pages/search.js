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

const SearchPage = () => {
  return (
    <Box
      bg={'white'}
      w="100%"
      p="10"
      borderRadius={'lg'}
      display="flex"
      justifyContent={'center'}
      alignItems="center"
    >
      <Box w="50%" flexDirection={'column'}>
        <Text fontSize="xl">Buscar por procedimentos</Text>
        <InputGroup w="100%" mt="1vh">
          <Input placeholder="Descubra novos procedimentos" />
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
        {/* <Box mt={'1vh'} display={'flex'} flexDirection={'row'}>
          <Text
            w={'10%'}
            p={'5px'}
            mr={'0.5vw'}
            color={'#b1b1b1'}
            border={'1px solid #b1b1b1'}
            borderRadius={'lg'}
            cursor={'pointer'}
            _hover={{
              bg: 'blue',
              color: 'white',
            }}
          >
            Cafeina
          </Text>
          <Text
            w={'10%'}
            p={'5px'}
            color={'#b1b1b1'}
            border={'1px solid #b1b1b1'}
            borderRadius={'lg'}
            cursor={'pointer'}
          >
            Filter
          </Text>
        </Box> */}
      </Box>
      <Box>
        <Text fontSize="lg">Resultados</Text>
        <Box>
          <Text fontSize="md">Title</Text>
          <Text fontSize="md">Description</Text>
          <Text fontSize="md">Actives Enzyms</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchPage
