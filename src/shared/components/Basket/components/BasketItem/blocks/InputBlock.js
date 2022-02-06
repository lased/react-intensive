import styled from 'styled-components'

const InputBlock = styled.div({
    width: '8%',

    'input': {
        '&[type=number]': {
            appearance: 'textfield'
        },
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            appearance: 'none',
            margin: 0
        }
    }
})

export default InputBlock