import { Component } from 'react';

import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <form className='Form' onSubmit={this.onSubmitHandler} noValidate>
                <div className='Buttons'></div>
            </form>
        )
    }
}

export default Form