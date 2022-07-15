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
import { FiEye, FiEyeOff } from 'react-icons/fi'

export const ChangePasswordModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [showOldPassword, setShowOldPassword] = React.useState(false)
  const [showNewPassword, setShowNewPassword] = React.useState(false)
  const handleClickOldPassword = () => setShowOldPassword(!showOldPassword)
  const handleClickNewPassword = () => setShowNewPassword(!showNewPassword)

  return (
    <>
      <Text onClick={onOpen}>Mudar minha senha</Text>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Redefinir Senha</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl id="oldPassword" isRequired>
              <FormLabel>Senha antiga</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showOldPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Search database"
                    h="80%"
                    variant="ghost"
                    icon={showOldPassword ? <FiEyeOff /> : <FiEye />}
                    onClick={handleClickOldPassword}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id="newPassword" isRequired>
              <FormLabel>Nova senha</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Search database"
                    h="80%"
                    variant="ghost"
                    icon={showNewPassword ? <FiEyeOff /> : <FiEye />}
                    onClick={handleClickNewPassword}
                  />
                </InputRightElement>
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
            >
              Redefinir Senha
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
