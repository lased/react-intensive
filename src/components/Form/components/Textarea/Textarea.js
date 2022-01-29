import { memo } from 'react'

import './Textarea.css'

const getClassName = (limit, error) => {
    const classes = ['Textarea-field']

    if (limit < 0) {
        classes.push('Textarea-field-danger')
    } else if (error) {
        classes.push('Textarea-field-error')
    }

    return classes.join(' ')
}
const getLimitClassName = (limit) => {
    const classes = ['Textarea-limit']

    if (limit < 0) {
        classes.push('Textarea-limit-danger')
    }

    return classes.join(' ')
}

const Textarea = (props) => {
    const limit = props.limit - props.value.length
    const id = `Textarea-${props.name}-id`
    const limitText = (
        limit < 0 ? 'Превышен лимит символов в поле' : `Доступно символов для ввода: ${limit}`
    )

    return (
        <div className='Textarea'>
            <label className='Textarea-label' htmlFor={id}>{props.label}</label>
            <textarea
                id={id}
                className={getClassName(limit, props.error)}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            ></textarea>
            {
                props.limit && <div className={getLimitClassName(limit)}>
                    {limitText}
                </div>
            }
            {
                props.error && limit >= 0 && <div className='Textarea-error'>
                    {props.error}
                </div>
            }
        </div>
    )
}

export default memo(Textarea)
