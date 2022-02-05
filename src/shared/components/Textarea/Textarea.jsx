import { memo } from 'react'

import { WrapperBlock, LabelBlock, ErrorBlock } from '../..'
import { TextareaBlock, LimitBlock } from './blocks'

const isDanger = (limit) => limit < 0
const setErrorProperty = ({ error, danger }) => {
  if (danger) {
    return { danger }
  }
  if (error) {
    return { error }
  }

  return {}
}

const Textarea = (props) => {
  const limit = props.limit - props.value.length
  const id = `Textarea-${props.name}-id`
  const limitText =
    limit < 0 ? 'Превышен лимит символов в поле' : `Доступно символов для ввода: ${limit}`

  return (
    <WrapperBlock>
      <LabelBlock htmlFor={id}>{props.label}</LabelBlock>
      <TextareaBlock
        {...setErrorProperty({ error: props.error, danger: isDanger(limit) })}
        id={id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.limit && (
        <LimitBlock {...setErrorProperty({ danger: isDanger(limit) })}>{limitText}</LimitBlock>
      )}
      {props.error && limit >= 0 && <ErrorBlock>{props.error}</ErrorBlock>}
    </WrapperBlock>
  )
}

export default memo(Textarea)
