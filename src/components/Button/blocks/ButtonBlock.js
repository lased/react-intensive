import styled from 'styled-components'

const getColor = ({ primary, error, secondary }) => {
    if (primary || error || secondary) { return '#FFF' }

    return '#000'
}
const getBackgroundColor = ({ primary, error, secondary }) => {
    if (primary) { return '#334155' }
    if (secondary) { return '#15803d' }
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