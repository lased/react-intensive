import styled from 'styled-components'

const AboutBlock = styled.div({
    width: '50%',
    margin: '30px auto 0',
    textAlign: 'justify',
    backgroundColor: 'var(--background-color-30)',
    borderRadius: 10,
    padding: 10,
    color: 'var(--text-color-10)',

    '& > h1': {
        fontSize: '1.5rem',
        textAlign: 'center',
        margin: 10
    }
})

export default AboutBlock