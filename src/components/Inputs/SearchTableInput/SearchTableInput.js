import React from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

export const SearchTableInput = ({ data, setData, ...rest }) => {
  const [inputValue, setInputValue] = React.useState('')
  const filterDataTable = (e) => {
    console.log(e.target.value)
    //filtro aq
    setInputValue(e.target.value)
  }
  return (
    <InputGroup w={'40%'}>
      <Input
        {...rest}
        value={inputValue}
        onChange={(e) => filterDataTable(e)}
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
