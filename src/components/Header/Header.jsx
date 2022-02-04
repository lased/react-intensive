import { useContext } from 'react'

import { ContainerBlock, HeaderBlock, ToggleButtonBlock } from './blocks'
import { ThemeContext } from '../../context'
import { Nav, Basket, Login } from './components'

const getThemeText = (theme) => (theme === 'dark' ? 'Светлая' : 'Темная')
const getStyleButton = (theme) => (theme === 'dark' ? {} : { primary: true })

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <HeaderBlock>
      <ContainerBlock>
        <Nav />
        <Login />
        <Basket />
        <ToggleButtonBlock {...getStyleButton(theme)} onClick={toggleTheme}>
          {getThemeText(theme)}
        </ToggleButtonBlock>
      </ContainerBlock>
    </HeaderBlock>
  )
}

export default Header
