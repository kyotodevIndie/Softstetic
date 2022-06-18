import React from 'react'
import { SideBar } from './Sidebar/Sidebar'

export const Layout = ({ children, useLayout }) => {
  if (useLayout) return <SideBar>{children}</SideBar>
  else return <>{children}</>
}
