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
  IconButton,
} from '@chakra-ui/react'
import React from 'react'
import { FiChevronDown, FiChevronUp, FiEdit3, FiTrash } from 'react-icons/fi'
import { useTable, useSortBy } from 'react-table'
import { DefaultButton } from '../DefaultButton'
import { AddPatientModal } from '../Modals/CRUD/AddModal/AddModal'
import { DeleteDialog } from '../Dialog/DeleteDialog'
import { SearchTableInput } from '../Inputs/SearchTableInput/SearchTableInput'
import { AddPatientModal } from '../Modals/AddModal/AddModal'
import { UpdateModal } from '../Modals/UpdateModal/UpdateModal'

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
              <Td>
                <UpdateModal />
              </Td>
              <Td>
                <DeleteDialog />
              </Td>
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
    <Box w="60%" py="5px" borderRadius={'lg'} bg={'#fff'} height={'86.5vh'}>
      <Text m={'1vw'} fontSize="lg">
        Pacientes
      </Text>
      <Box
        display="flex"
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        m={'1vw'}
        mb={'2v2'}
      >
        <SearchTableInput
          placeholder="Buscar Pacientes"
          data={data}
          setData={setData}
        />
        <DefaultButton text="Novo Paciente" onClick={onOpen} />
        <AddPatientModal variant="patients" isOpen={isOpen} onClose={onClose} />
      </Box>
      <Box overflowY={'scroll'} h={'82%'}>
        <DataTable data={data} />
      </Box>
    </Box>
  )
}
