import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useTable, useSortBy } from 'react-table'
import { DefaultButton } from '../DefaultButton'
import { SearchInputTable } from '../Inputs/SearchInputTable/SearchInputTable'
import { AddPatientModal } from '../Modals/AddModal/AddModal'

function DataTable({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'name',
      },
      {
        Header: 'Idade',
        accessor: 'age',
      },
      {
        Header: 'Procedimento',
        accessor: 'procedure',
      },
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, indexTr) => (
          <Tr key={indexTr} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, indexTh) => (
              <Th
                key={indexTh}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render('Header')}
                <chakra.span pl="4" display={'flex'} flexDirection={'row'}>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, indexRw) => {
          prepareRow(row)
          return (
            <Tr key={indexRw} {...row.getRowProps()}>
              {row.cells.map((cell, indexCl) => (
                <Td
                  key={indexCl}
                  {...cell.getCellProps()}
                  isNumeric={cell.column.isNumeric}
                >
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export const CustomTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = React.useState([
    {
      name: 'macaco',
      age: 12,
      procedure: 'cossada',
    },
    {
      name: 'amor',
      age: 25,
      procedure: 'lapada',
    },
    {
      name: 'quebrado',
      age: 34,
      procedure: 'chute',
    },
  ])
  return (
    <Box w="60%" py="5px" borderRadius={'lg'} bg={'#fff'}>
      <Text m={'1vw'} fontSize="lg">
        Pacientes
      </Text>
      <Box
        display="flex"
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        m={'1vw'}
      >
        <SearchInputTable
          placeholder="Buscar Pacientes"
          data={data}
          setData={setData}
        />
        <DefaultButton text="Novo Paciente" onClick={onOpen} />
        <AddPatientModal variant="patients" isOpen={isOpen} onClose={onClose} />
      </Box>
      <DataTable data={data} />
    </Box>
  )
}
