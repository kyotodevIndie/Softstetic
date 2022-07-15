import { Flex, Icon, Link, Text, Tooltip } from '@chakra-ui/react'

export const NavItem = ({ icon, name, route, children, ...rest }) => {
  return (
    <Link
      href={route}
      m="0"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Tooltip hasArrow label={name} placement="right">
        <Flex
          align={'center'}
          w={['auto', 'auto', 'auto', 'auto', '48px', '48px']}
          p="4"
          mx="4"
          borderRadius="xl"
          role="group"
          cursor="pointer"
          fontSize={'16'}
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          <Text display={['flex', 'flex', 'flex', 'flex', 'none', 'none']}>
            {name}
          </Text>
        </Flex>
      </Tooltip>
    </Link>
  )
}
