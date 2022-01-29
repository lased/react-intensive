import { memo } from 'react'

import './Input.css'

const getClassName = (error) => {
    const classes = ['Input-field']

    if (error) {
        classes.push('Input-field-error')
    }

    return classes.join(' ')
}


const Input = (props) => {
    const placeholder = props.placeholder || props.label
    const type = props.type || 'text'
    const id = `Input-${props.name}-id`

    return (
        <div className='Input'>
            <label className='Input-label' htmlFor={id}>{props.label}</label>
            <input
                id={id}
                className={getClassName(props.error)}
                type={type}
                value={props.value}
                name={props.name}
                placeholder={placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {
                props.error && <div className='Input-error'>{props.error}</div>
            }

        </div>
    )
}

export default memo(Input)
