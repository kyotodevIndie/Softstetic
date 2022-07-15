import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { FiChevronDown, FiMenu, FiMoon, FiSun } from 'react-icons/fi'
import { ChangePasswordModal } from '../../Modals/ChangePasswordModal/ChangePasswordModal'

export const Navbar = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      ml={{ base: 0, xl: 60 }}
      px={{ base: 4, xl: 4 }}
      height={['8vh', '8vh', '9vh']}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      justifyContent={{ base: 'space-between', xl: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', xl: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', xl: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', xl: '6' }}>
        <IconButton
          size="xl"
          variant="ghost"
          aria-label="open menu"
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
          mr={['20px', '20px', '20px', '20px', '0px', '0px']}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  size={'sm'}
                  src={'https://github.com/kyotodevindie.png'}
                />
                <VStack
                  display={{ base: 'none', xl: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Kezia Morais</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', xl: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>
                <ChangePasswordModal />
              </MenuItem>
              <MenuDivider />
              <MenuItem>Sair</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
