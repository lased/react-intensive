import { PureComponent } from 'react'

import './Input.css'

export class Input extends PureComponent {
    render() {
        return (
            <div className='Input'>
                <label className='Input-label'>{this.props.label}</label>
                <input
                    className='Input-filed'
                    value={this.props.value}
                    name={this.props.name}
                    onChange={this.props.onChange}
                />
                {
                    this.props.error && <div className='Input-error'>{this.props.error}</div>
                }
            </div>
        )
    }
}

export default Input
