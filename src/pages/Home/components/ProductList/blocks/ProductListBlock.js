import styled from 'styled-components'

const ProductListBlock = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

    '& > p': {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: 'var(--text-color-10)'
    }
})

export default ProductListBlock