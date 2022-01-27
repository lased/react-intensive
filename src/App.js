import { Component } from 'react'

import { Form, Card } from './components'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  onSubmitHandler = (data) => {
    this.setState({ data })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.data
            ? <Card header='Анкета' data={this.state.data} />
            : <Form header='Создание анкеты' onSubmit={this.onSubmitHandler} />
        }
      </div>
    )
  }
}

export default App
