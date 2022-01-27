import { Component } from 'react'

import { Form } from './components'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.header = 'Создание анкеты'
  }

  render() {
    return (
      <div className='wrapper'>
        <div className="App">
          <header className="App-header">{this.header}</header>
          <Form />
        </div>
      </div>
    )
  }
}

export default App
