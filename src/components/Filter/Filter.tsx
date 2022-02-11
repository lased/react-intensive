import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { EFilterStatus, FilterAction } from 'store'

import { processIcon, starIcon, successIcon } from 'icons'
import './Filter.css'

const Filter = () => {
  const [filter, setFilter] = useState<EFilterStatus>(EFilterStatus.ALL)
  const dispatch = useDispatch()

  const getClassName = (filterItem: EFilterStatus) =>
    ['Filter-item', ...(filterItem === filter ? ['isActive'] : [])].join(' ')
  const toggleFilter = (filterItem: EFilterStatus) => () => {
    if (filterItem === filter) {
      setFilter(EFilterStatus.ALL)
      dispatch(FilterAction.toggle(EFilterStatus.ALL))
    } else {
      setFilter(filterItem)
      dispatch(FilterAction.toggle(filterItem))
    }
  }

  return (
    <div className='Filter'>
      <div
        className={getClassName(EFilterStatus.COMPLETED)}
        onClick={toggleFilter(EFilterStatus.COMPLETED)}
      >
        <img src={successIcon} alt='success' />
        Выполненные задачи
      </div>
      <div
        className={getClassName(EFilterStatus.PROCESS)}
        onClick={toggleFilter(EFilterStatus.PROCESS)}
      >
        <img src={processIcon} alt='process' />
        Задачи в работе
      </div>
      <div
        className={getClassName(EFilterStatus.BOOKMARK)}
        onClick={toggleFilter(EFilterStatus.BOOKMARK)}
      >
        <img src={starIcon} alt='star' />
        Избранные задачи
      </div>
    </div>
  )
}

export default Filter
