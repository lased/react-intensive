import { ContainerBlock, ModalBlock, CloseButtonBlock } from './blocks'

const Modal = ({ children, onClose }) => {
  return (
    <ContainerBlock>
      <ModalBlock>
        <CloseButtonBlock error onClick={onClose}>
          X
        </CloseButtonBlock>
        {children}
      </ModalBlock>
    </ContainerBlock>
  )
}

export default Modal
