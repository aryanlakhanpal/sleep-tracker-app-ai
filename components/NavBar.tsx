import { checkUser } from '@/lib/checkUser'
import React from 'react'

const NavBar = () => {
  const user = checkUser();
  return (
    <div>
      This is navbar
    </div>
  )
}

export default NavBar
