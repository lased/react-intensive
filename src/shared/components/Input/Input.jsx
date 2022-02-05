import { memo } from 'react'

import { LabelBlock, WrapperBlock, ErrorBlock } from '../..'
import { InputBlock } from './blocks'

const setErrorProperty = (error) => (error ? { error } : {})

const Input = (props) => {
  const placeholder = props.placeholder || props.label
  const type = props.type || 'text'
  const id = `Input-${props.name}-id`

  return (
    <WrapperBlock>
      <LabelBlock htmlFor={id}>{props.label}</LabelBlock>
      <InputBlock
        {...setErrorProperty(props.error)}
        id={id}
        type={type}
        value={props.value}
        name={props.name}
        placeholder={placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && <ErrorBlock>{props.error}</ErrorBlock>}
    </WrapperBlock>
  )
}

export default memo(Input)
