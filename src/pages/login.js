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
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const { register, handleSubmit } = useForm()
  const { signIn } = useAuth

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} display={['none', 'none', 'flex']}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1641300142587-17b25c022b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
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
            <form onSubmit={handleSubmit(handleSignIn)}>
              <FormControl id="email" mt={5}>
                <FormLabel>Email</FormLabel>
                <Input type="email" {...register('email')} />
              </FormControl>
              <FormControl id="password" mt={5}>
                <FormLabel>Senha</FormLabel>
                <Input {...register('password')} type="password" />
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
            </form>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  )
}
export default LoginPage
