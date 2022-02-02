import styled from 'styled-components'

const getBorder = (error) => (
  error
    ? '2px solid #b91c1c'
    : '2px solid var(--text-color-20)'
)

const InputBlock = styled.input(({ error }) => ({
  color: 'var(--text-color-10)',
  padding: 10,
  borderRadius: 5,
  border: getBorder(error),
  outline: 'none',
  backgroundColor: 'transparent',

  '::placeholder': {
    color: 'var(--text-color-20)'
  }
}))

export default InputBlock