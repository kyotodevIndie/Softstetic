import React from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

export const SearchInputTable = ({ data, setData, ...rest }) => {
  const [inputValue, setInputValue] = React.useState('')
  const filterDataTable = (value) => {
    setInputValue(value)
    data.map((item) => {})
  }
  return (
    <InputGroup w={'40%'}>
      <Input
        {...rest}
        value={inputValue}
        onChange={(value) => filterDataTable(value)}
      />
      <InputRightElement>
        <IconButton
          aria-label="Search database"
          variant={'ghost'}
          icon={<FiSearch />}
        />
      </InputRightElement>
    </InputGroup>
  )
}
