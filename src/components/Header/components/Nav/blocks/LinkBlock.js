import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const LinkBlock = styled(NavLink)({
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    margin: '0 10px',
    textDecoration: 'none',
    color: 'var(--text-color-10)',
    fontWeight: 'bold',
    borderRadius: 5,

    ':hover, &.active': {
        backgroundColor: 'var(--background-color-30)',
    }
})

export default LinkBlock