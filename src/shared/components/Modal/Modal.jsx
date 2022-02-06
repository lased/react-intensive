import { ContainerBlock, ModalBlock, CloseButtonBlock, ContentBlock } from './blocks'

const Modal = ({ children, onClose, maxWidth, maxHeight }) => (
  <ContainerBlock>
    <ModalBlock maxWidth={maxWidth}>
      <CloseButtonBlock error onClick={onClose}>
        X
      </CloseButtonBlock>
      <ContentBlock maxHeight={maxHeight}>{children}</ContentBlock>
    </ModalBlock>
  </ContainerBlock>
)

export default Modal
