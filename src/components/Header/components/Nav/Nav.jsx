import React from 'react'

import { NavBlock, LinkBlock } from './blocks'

const Nav = () => (
  <NavBlock>
    <LinkBlock to='/' exact activeClassName='active'>
      Главная
    </LinkBlock>
    <LinkBlock to='/about' activeClassName='active'>
      О магазине
    </LinkBlock>
  </NavBlock>
)

export default Nav
