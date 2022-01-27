import { PureComponent } from 'react'

import './Input.css'

class Input extends PureComponent {
    getType() {
        return this.props.type || 'text'
    }

    getPlaceholder() {
        return this.props.placeholder || this.props.label
    }

    getId() {
        return `Input-${this.props.name}-id`
    }

    getInputClassName() {
        return `Input-field ${this.props.error ? 'Input-field-error' : ''}`
    }

    render() {
        return (
            <div className='Input'>
                <label className='Input-label' htmlFor={this.getId()}>{this.props.label}</label>
                <input
                    id={this.getId()}
                    className={this.getInputClassName()}
                    type={this.getType()}
                    value={this.props.value}
                    name={this.props.name}
                    placeholder={this.getPlaceholder()}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                {
                    this.props.error && <div className='Input-error'>{this.props.error}</div>
                }

            </div>
        )
    }
}

export default Input
