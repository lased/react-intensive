import { useSelector, useDispatch } from 'react-redux'

import { ContainerBlock, HeaderBlock, ToggleButtonBlock } from './blocks'
import { Nav, BasketButton, Login } from './components'
import { ThemeAction } from '../../store'

const getThemeText = (theme) => (theme === 'dark' ? 'Светлая' : 'Темная')
const getStyleButton = (theme) => (theme === 'dark' ? {} : { primary: true })

const Header = () => {
  const theme = useSelector((store) => store.theme)
  const auth = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  const onToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    dispatch(ThemeAction.toggle(nextTheme))
  }

  return (
    <HeaderBlock>
      <ContainerBlock>
        <Nav />
        <Login />
        {auth.isAuth && <BasketButton />}
        <ToggleButtonBlock {...getStyleButton(theme)} onClick={onToggleTheme}>
          {getThemeText(theme)}
        </ToggleButtonBlock>
      </ContainerBlock>
    </HeaderBlock>
  )
}

export default Header
