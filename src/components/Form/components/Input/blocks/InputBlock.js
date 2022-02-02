import styled from 'styled-components';

const getBorder = (error) => error ? '2px solid #b91c1c' : '2px solid #78909c'

const InputBlock = styled.input(({ error }) => ({
  color: '#FFF',
  padding: 10,
  borderRadius: 5,
  border: getBorder(error),
  outline: 'none',
  backgroundColor: 'transparent',

  '::placeholder': {
    color: '#94a3b8'
  }
}))

export default InputBlock