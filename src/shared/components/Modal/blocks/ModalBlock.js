import styled from 'styled-components'

const ModalBlock = styled.div(({ maxWidth }) => ({
    maxWidth: maxWidth || 400,
    padding: 10,
    borderRadius: 5,
    flexGrow: 1,
    backgroundColor: 'var(--background-color-30)',
    color: 'var(--text-color-10)',
    position: 'relative'
}))

export default ModalBlock