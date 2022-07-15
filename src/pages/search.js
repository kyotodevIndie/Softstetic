/* eslint-disable react/no-children-prop */
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { ResultCard } from '../components/Cards/ResultCard/ResultCard'
import { SearchInput } from '../components/Inputs/SearchInput/SearchInput'

const SearchPage = () => {
  return (
    <Box
      bg={'#fff'}
      w={'100%'}
      height={'86.5vh'}
      p={'10'}
      borderRadius={'lg'}
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <SearchInput />
      <Text fontSize={'lg'} my={'20px'}>
        Resultados
      </Text>
      <Box
        height={'100%'}
        width={['100%', '100%', '100%', '50%', '50%', '50%']}
        overflowY={'scroll'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <ResultCard
          title={'I Hold You'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ut diam id faucibus. Aenean cursus tincidunt consequat. Etiam malesuada aliquam diam eu dapibus. Phasellus maximus aliquam turpis sit amet aliquet. Praesent volutpat dui id lorem rutrum faucibus. Quisque et dapibus dolor, in auctor nisi. Nam leo quam, suscipit sit amet leo id, suscipit sodales sem. Maecenas quam ipsum, hendrerit eget purus eget, tristique efficitur enim. Suspendisse potenti.'
          }
          actives={['basil', 'spaghetti', 'tomato sauce']}
          url_video={'m_qlgFQs7E4'}
        />
        <ResultCard
          title={'No time to die'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ut diam id faucibus. Aenean cursus tincidunt consequat. Etiam malesuada aliquam diam eu dapibus. Phasellus maximus aliquam turpis sit amet aliquet. Praesent volutpat dui id lorem rutrum faucibus. Quisque et dapibus dolor, in auctor nisi. Nam leo quam, suscipit sit amet leo id, suscipit sodales sem. Maecenas quam ipsum, hendrerit eget purus eget, tristique efficitur enim. Suspendisse potenti.'
          }
          actives={['basil', 'spaghetti', 'tomato sauce']}
          url_video={'uNGmyQ8UbZ8'}
        />
        <ResultCard
          title={'No time to die'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ut diam id faucibus. Aenean cursus tincidunt consequat. Etiam malesuada aliquam diam eu dapibus. Phasellus maximus aliquam turpis sit amet aliquet. Praesent volutpat dui id lorem rutrum faucibus. Quisque et dapibus dolor, in auctor nisi. Nam leo quam, suscipit sit amet leo id, suscipit sodales sem. Maecenas quam ipsum, hendrerit eget purus eget, tristique efficitur enim. Suspendisse potenti.'
          }
          actives={['basil', 'spaghetti', 'tomato sauce']}
          url_video={'uNGmyQ8UbZ8'}
        />
        <ResultCard
          title={'No time to die'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ut diam id faucibus. Aenean cursus tincidunt consequat. Etiam malesuada aliquam diam eu dapibus. Phasellus maximus aliquam turpis sit amet aliquet. Praesent volutpat dui id lorem rutrum faucibus. Quisque et dapibus dolor, in auctor nisi. Nam leo quam, suscipit sit amet leo id, suscipit sodales sem. Maecenas quam ipsum, hendrerit eget purus eget, tristique efficitur enim. Suspendisse potenti.'
          }
          actives={['basil', 'spaghetti', 'tomato sauce']}
          url_video={'uNGmyQ8UbZ8'}
        />
        <ResultCard
          title={'No time to die'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ut diam id faucibus. Aenean cursus tincidunt consequat. Etiam malesuada aliquam diam eu dapibus. Phasellus maximus aliquam turpis sit amet aliquet. Praesent volutpat dui id lorem rutrum faucibus. Quisque et dapibus dolor, in auctor nisi. Nam leo quam, suscipit sit amet leo id, suscipit sodales sem. Maecenas quam ipsum, hendrerit eget purus eget, tristique efficitur enim. Suspendisse potenti.'
          }
          actives={['basil', 'spaghetti', 'tomato sauce']}
          url_video={'uNGmyQ8UbZ8'}
        />
      </Box>
    </Box>
  )
}

export default SearchPage
