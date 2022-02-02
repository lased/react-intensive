import { memo } from 'react'

import { ButtonBlock } from './blocks'

const Button = (props) => {
    return (
        <ButtonBlock
            {...props}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </ButtonBlock>
    )
}

export default memo(Button)
