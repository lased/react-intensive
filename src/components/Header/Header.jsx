import { useSelector, shallowEqual } from 'react-redux'
import { memo } from 'react'

import { Nav, BasketButton, Login, ToggleTheme } from './components'
import { ContainerBlock, HeaderBlock } from './blocks'

const Header = () => {
  const auth = useSelector((store) => store.auth, shallowEqual)

  return (
    <HeaderBlock>
      <ContainerBlock>
        <Nav />
        <Login />
        {auth.isAuth && <BasketButton />}
        <ToggleTheme />
      </ContainerBlock>
    </HeaderBlock>
  )
}

export default memo(Header)
