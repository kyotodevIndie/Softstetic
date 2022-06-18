import React from 'react'
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import { Navbar } from '../NavBar/Navbar'
import { SidebarContent } from './SidebarContent'

export const SideBar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size={'xs'}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Navbar onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: 60 }}
        p="4"
        bg={['green', 'pink', 'aquamarine', 'teal', 'orange', 'lavender']}
        borderRadius={[0, 0, '20px 0 0 0']}
        minH={['92vh', '92vh', '91vh']}
        minW={['100vw', '100vw', '90vw', '93vw', '94vw', '95vw']}
        position={['relative', 'relative', 'absolute']}
        right={0}
        top={[0, 0, '9vh']}
      >
        {children}
      </Box>
    </Box>
  )
}
