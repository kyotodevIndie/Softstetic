import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'

const LoginPage = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} display={['none', 'none', 'flex']}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={['full', 'full', '60%']} maxW={'md'}>
          <Box
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={'10%'}
          >
            <Heading fontSize={'2xl'}>Logue na sua conta!</Heading>
            <FormControl id="email" mt={5}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" mt={5}>
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6} mt={5}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Lembre-se de mim</Checkbox>
                <Link color={'blue.500'}>Esqueci a senha</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'}>
                Login
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  )
}
export default LoginPage
