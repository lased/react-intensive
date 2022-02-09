import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TitleBlock = styled(Link)({
    color: 'var(--text-color-10)',
    textDecoration: 'none',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
})

export default TitleBlock