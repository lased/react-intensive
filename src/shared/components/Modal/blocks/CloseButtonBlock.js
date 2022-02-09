
import styled from 'styled-components'

import { Button } from '../..'

const CloseButtonBlock = styled(Button)({
    borderRadius: '50%',
    width: 30,
    height: 30,
    fontSize: 15,
    lineHeight: '5px',
    position: 'absolute',
    right: -15,
    top: -15
})

export default CloseButtonBlock