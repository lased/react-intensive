import React from 'react'

import { NavBlock, LinkBlock } from './blocks'

const Nav = () => {
  return (
    <NavBlock>
      <LinkBlock to='/'>Home</LinkBlock>
      <LinkBlock to='/about'>About</LinkBlock>
    </NavBlock>
  )
}

export default Nav
