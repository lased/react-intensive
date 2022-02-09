import styled from 'styled-components'

const BasketBlock = styled.div({
    display: 'flex',
    flexDirection: 'column',

    '& > strong': {
        textAlign: 'center',
        fontSize: '1.3rem'
    }
})

export default BasketBlock