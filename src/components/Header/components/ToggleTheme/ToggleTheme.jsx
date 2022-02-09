import { useDispatch, useSelector } from 'react-redux'
import React, { memo } from 'react'

import { ThemeAction } from '../../../../store'
import { ToggleThemeBlock } from './blocks'

const getThemeText = (theme) => (theme === 'dark' ? 'Светлая' : 'Темная')
const getStyleButton = (theme) => (theme === 'dark' ? {} : { primary: true })

const ToggleTheme = () => {
  const theme = useSelector((store) => store.theme)
  const dispatch = useDispatch()

  const onToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    dispatch(ThemeAction.toggle(nextTheme))
  }

  return (
    <ToggleThemeBlock {...getStyleButton(theme)} onClick={onToggleTheme}>
      {getThemeText(theme)}
    </ToggleThemeBlock>
  )
}

export default memo(ToggleTheme)
