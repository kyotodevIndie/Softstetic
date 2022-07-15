import React from 'react'
import { Box, Text, useDisclosure } from '@chakra-ui/react'
import { ResultModal } from '../../Modals/ResultModal/ResultModal'

export const ResultCard = ({ title, description, actives, url_video }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        p="10px"
        w="99%"
        mt={'20px'}
        borderRadius={'lg'}
        bg={'#fff'}
        border={'1px solid #96969630'}
        boxShadow={'0px 0px 1px 0px #0000003b'}
        cursor={'pointer'}
        _hover={{
          backgroundColor: '#dcd0ff ',
          color: '#fff',
        }}
        onClick={onOpen}
      >
        <Box>
          <Text fontSize="lg">{title}</Text>
          <Text fontSize="sm" mt={'5px'} color="#343434">
            {`${description.substr(0, 250)}${
              description.length > 250 && '...'
            }`}
          </Text>
          <Text fontSize="sm" mt={'5px'} color={'blue'}>
            {actives.map((active) => {
              return `${active}, `
            })}
          </Text>
        </Box>
      </Box>
      <ResultModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        description={description}
        actives={actives}
        url_video={url_video}
      />
    </>
  )
}
