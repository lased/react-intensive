import styled from 'styled-components'

import { Button } from '../../../../../shared'

const BasketBlock = styled(Button)({
    backgroundColor: 'var(--background-color-30)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '5px 10px',
    color: 'var(--text-color-10)',
    borderRadius: 5,
    marginLeft: 20
})

export default BasketBlock