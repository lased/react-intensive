import { memo } from 'react'
import { FieldBlock, LabelBlock } from './blocks'

const Field = (props) => {
    const getContents = () => props.children || props.value

    return (
        <FieldBlock>
            <LabelBlock>{props.label}</LabelBlock>
            {getContents()}
        </FieldBlock>
    )
}

export default memo(Field)
