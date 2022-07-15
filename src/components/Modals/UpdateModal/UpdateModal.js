import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { FiEdit3 } from 'react-icons/fi'

export const UpdateModal = ({ variant }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <>
      <IconButton
        aria-label="Edit"
        variant={'ghost'}
        icon={<FiEdit3 />}
        onClick={onOpen}
      />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar dados</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl id="name" isRequired>
              <FormLabel>Nome</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type="text"
                  placeholder="Ex... Luke Skywalker"
                />
              </InputGroup>
            </FormControl>

            <FormControl id="age" isRequired>
              <FormLabel>Idade</FormLabel>
              <InputGroup size="md">
                <Input pr="4.5rem" type="number" placeholder="Ex... 18" />
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={5}>
              Cancelar
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={onClose}
            >
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
