import {
  Box,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { NavItem } from './NavItem'
import { LinkItems } from './LinkItems'

export const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      w={{ base: 'full', md: '80' }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box
        display={'flex'}
        h={'full'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        {LinkItems.map((link, index) => (
          <Box
            key={link.name}
            mb={'20px'}
            mt={index === 0 ? [0, 0, '-150px'] : null}
          >
            <NavItem icon={link.icon} route={link.route} name={link.name} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
