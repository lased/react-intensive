import styled from 'styled-components'

const getColor = ({ primary, error }) => {
    if (primary || error) { return '#FFF' }

    return '#000'
}
const getBackgroundColor = ({ primary, error }) => {
    if (primary) { return '#15803d' }
    if (error) { return '#d32f2f' }

    return '#FFF'
}
const ButtonBlock = styled.button((props) => ({
    padding: 10,
    borderRadius: 5,
    outline: 'none',
    border: 'none',
    color: getColor(props),
    backgroundColor: getBackgroundColor(props),

    ':hover': {
        cursor: 'pointer',
        opacity: .85
    },
}))

export default ButtonBlock