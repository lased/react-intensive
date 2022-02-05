import { useSelector, useDispatch } from 'react-redux'

import { ContainerBlock, HeaderBlock, ToggleButtonBlock } from './blocks'
import { Nav, Basket, Login } from './components'
import { ThemeAction } from '../../store'

const getThemeText = (theme) => (theme === 'dark' ? 'Светлая' : 'Темная')
const getStyleButton = (theme) => (theme === 'dark' ? {} : { primary: true })

const Header = () => {
  const themeSelector = useSelector((store) => store.theme)
  const authSelector = useSelector((store) => store.auth)
  const nextTheme = themeSelector === 'dark' ? 'light' : 'dark'
  const dispatch = useDispatch()

  return (
    <HeaderBlock>
      <ContainerBlock>
        <Nav />
        <Login />
        {authSelector.isAuth && <Basket />}
        <ToggleButtonBlock
          {...getStyleButton(themeSelector)}
          onClick={() => dispatch(ThemeAction.toggle(nextTheme))}
        >
          {getThemeText(themeSelector)}
        </ToggleButtonBlock>
      </ContainerBlock>
    </HeaderBlock>
  )
}

export default Header
