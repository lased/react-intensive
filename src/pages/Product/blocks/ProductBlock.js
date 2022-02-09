import styled from 'styled-components'

const ProductBlock = styled.div({
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    maxWidth: '50%',
    backgroundColor: 'var(--background-color-30)',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,

    '& > p': {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        textAlign: 'center',
        color: 'var(--text-color-10)'
    }
})

export default ProductBlock