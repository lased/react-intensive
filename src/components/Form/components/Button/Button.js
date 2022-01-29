import { memo } from 'react'

import './Button.css'

const getClassName = (design) => {
    const classes = ['Button']

    if (design) {
        classes.push(`Button-${design}`)
    }

    return classes.join(' ')
}

const Button = (props) => {
    return (
        <button
            className={getClassName(props.design)}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default memo(Button)
