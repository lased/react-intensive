import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'

import { EFilterStatus, filterReducer } from 'store'
import Filter from './Filter'

let filterStore = {} as Store
let wrapper = <></>

beforeEach(() => {
  filterStore = createStore(filterReducer)
  wrapper = (
    <Provider store={filterStore}>
      <Filter />
    </Provider>
  )
})

describe('without events', () => {
  it('completed text', () => {
    render(wrapper)
    expect(screen.getByText(/Выполненные задачи/i)).toBeInTheDocument()
  })
  it('process text', () => {
    render(wrapper)
    expect(screen.getByText(/Задачи в работе/i)).toBeInTheDocument()
  })
  it('bookmark text', () => {
    render(wrapper)
    expect(screen.getByText(/Избранные задачи/i)).toBeInTheDocument()
  })
})
describe('with events', () => {
  it('check store state', () => {
    render(wrapper)

    const bookmark = screen.getByText(/Избранные задачи/i)
    const completed = screen.getByText(/Выполненные задачи/i)
    const process = screen.getByText(/Задачи в работе/i)

    expect(filterStore.getState()).toEqual({ status: EFilterStatus.ALL })
    userEvent.click(bookmark)
    expect(filterStore.getState()).toEqual({ status: EFilterStatus.BOOKMARK })
    userEvent.click(completed)
    expect(filterStore.getState()).toEqual({ status: EFilterStatus.COMPLETED })
    userEvent.click(process)
    expect(filterStore.getState()).toEqual({ status: EFilterStatus.PROCESS })
    userEvent.click(process)
    expect(filterStore.getState()).toEqual({ status: EFilterStatus.ALL })
  })
  it('click on filters', () => {
    render(wrapper)

    const bookmark = screen.getByText(/Избранные задачи/i)
    const completed = screen.getByText(/Выполненные задачи/i)
    const process = screen.getByText(/Задачи в работе/i)

    expect(bookmark).not.toHaveClass('isActive')
    expect(completed).not.toHaveClass('isActive')
    expect(process).not.toHaveClass('isActive')
    userEvent.click(bookmark)
    expect(bookmark).toHaveClass('isActive')
    expect(completed).not.toHaveClass('isActive')
    expect(process).not.toHaveClass('isActive')
    userEvent.click(bookmark)
    expect(bookmark).not.toHaveClass('isActive')
    expect(completed).not.toHaveClass('isActive')
    expect(process).not.toHaveClass('isActive')
    userEvent.click(completed)
    expect(bookmark).not.toHaveClass('isActive')
    expect(completed).toHaveClass('isActive')
    expect(process).not.toHaveClass('isActive')
    userEvent.click(process)
    expect(bookmark).not.toHaveClass('isActive')
    expect(completed).not.toHaveClass('isActive')
    expect(process).toHaveClass('isActive')
  })
})
