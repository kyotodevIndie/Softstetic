import { FiSearch, FiUser, FiUsers, FiList, FiDroplet } from 'react-icons/fi'

export const LinkItems = [
  { name: 'Pacientes', route: '/', icon: FiUser },
  { name: 'Buscar Procedimentos', route: '/search', icon: FiSearch },
  { name: 'Usuários', route: '/users', icon: FiUsers },
  { name: 'Procedimentos', route: '/procedure', icon: FiList },
  { name: 'Ativos', route: '/actives', icon: FiDroplet },
]
