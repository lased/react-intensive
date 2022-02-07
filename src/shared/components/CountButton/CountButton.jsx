import { useState } from 'react'

import { Button } from '../'

const CountButton = ({ min, max, current, onUpdate }) => {
  const [count, setCount] = useState(current)

  const changeCount = (value) => {
    setCount(value)
    onUpdate(value)
  }

  return (
    <>
      <Button error disabled={count <= min} onClick={() => changeCount(count - 1)}>
        -
      </Button>
      <strong>{count}</strong>
      <Button secondary disabled={count >= max} onClick={() => changeCount(count + 1)}>
        +
      </Button>
    </>
  )
}
export default CountButton
