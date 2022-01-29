import { memo } from 'react'

import './Field.css'

const Field = (props) => {
    const getContents = () => props.children || props.value

    return (
        <div className='Field'>
            <span className='Field-label'>{props.label}</span>
            {getContents()}
        </div>
    )
}

export default memo(Field)
