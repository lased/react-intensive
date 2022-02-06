import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import { ContainerBlock, HeaderBlock, ToggleButtonBlock } from './blocks'
import { Nav, BasketButton, Login } from './components'
import { BasketAction, ThemeAction } from '../../store'

const getThemeText = (theme) => (theme === 'dark' ? 'Светлая' : 'Темная')
const getStyleButton = (theme) => (theme === 'dark' ? {} : { primary: true })

const Header = () => {
  const theme = useSelector((store) => store.theme)
  const auth = useSelector((store) => store.auth)
  const prevTheme = useRef(theme)
  const dispatch = useDispatch()

  const onToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    dispatch(ThemeAction.toggle(nextTheme))
  }

  useEffect(() => {
    document.body.classList.remove(prevTheme.current)
    document.body.classList.add(theme)
    prevTheme.current = theme
  }, [theme])

  useEffect(() => {
    dispatch(BasketAction.loadAsync())
  }, [])

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
