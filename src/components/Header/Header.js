import { useContext, useState } from 'react';

import { ContainerBlock, HeaderBlock, ToggleButtonBlock } from './blocks';
import { ThemeContext } from '../../context'
import { Button, ConfirmModal } from '../'

const getThemeText = (theme) => theme === 'dark' ? 'Светлая' : 'Темная'
const getStyleButton = (theme) => theme === 'dark' ? {} : { primary: true }

const Header = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [showModal, setShowModal] = useState(false)

  const showConfirmModal = () => setShowModal(true)
  const onResetFormHandler = (confirmed) => {
    if (confirmed) { props.onResetForm() }

    setShowModal(false)
  }

  return (
    <HeaderBlock>
      <ContainerBlock>
        {props.showReset && <Button error onClick={showConfirmModal}>Сбросить форму</Button>}
        <ToggleButtonBlock
          {...getStyleButton(theme)}
          onClick={toggleTheme}
        >
          {getThemeText(theme)}
        </ToggleButtonBlock>
        {showModal && <ConfirmModal onConfirm={onResetFormHandler} />}
      </ContainerBlock>
    </HeaderBlock>
  )
}

export default Header
