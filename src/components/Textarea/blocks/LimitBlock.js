import styled from 'styled-components'

const getColor = ({ danger }) => {
    if (danger) { return '#f59e0b' }

    return 'var(--text-color-30)'
}
const LimitBlock = styled.div((props) => ({
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: getColor(props),
    margin: 5
}))

export default LimitBlock