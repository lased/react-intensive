import { useContext } from 'react'

import { ContainerBlock, HeaderBlock, ToggleButtonBlock } from './blocks'
import { ThemeContext } from '../../context'
import { useAuth } from '../../hooks'
import { Nav, Basket, Login } from './components'

const getThemeText = (theme) => (theme === 'dark' ? 'Светлая' : 'Темная')
const getStyleButton = (theme) => (theme === 'dark' ? {} : { primary: true })

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { isAuth } = useAuth()

  return (
    <HeaderBlock>
      <ContainerBlock>
        <Nav />
        <Login />
        {isAuth && <Basket />}
        <ToggleButtonBlock {...getStyleButton(theme)} onClick={toggleTheme}>
          {getThemeText(theme)}
        </ToggleButtonBlock>
      </ContainerBlock>
    </HeaderBlock>
  )
}

export default Header
