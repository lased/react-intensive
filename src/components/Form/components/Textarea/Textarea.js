import { PureComponent } from 'react'

import './Textarea.css'

class Textarea extends PureComponent {
    getId() {
        return `Textarea-${this.props.name}-id`
    }

    getLimit() {
        return this.props.limit - this.props.value.length
    }

    getLimitText() {
        return this.getLimit() < 0
            ? 'Превышен лимит символов в поле'
            : `Доступно символов для ввода: ${this.getLimit()}`
    }

    getDangerClass() {
        return this.getLimit() < 0 ? 'Textarea-limit-danger' : ''
    }

    getTextareaClassName() {
        const limit = this.getLimit()
        let className = 'Textarea-field'

        if (limit < 0) {
            className += ` Textarea-field-danger`
        } else if (this.props.error) {
            className += ' Textarea-field-error'
        }

        return className
    }

    render() {
        console.log('Render textarea ', this.props.name, this.props.limit)
        return (
            <div className='Textarea'>
                <label className='Textarea-label' htmlFor={this.getId()}>{this.props.label}</label>
                <textarea
                    id={this.getId()}
                    className={this.getTextareaClassName()}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                ></textarea>
                {
                    this.props.limit && <div className={`Textarea-limit ${this.getDangerClass()}`}>
                        {this.getLimitText()}
                    </div>
                }
                {
                    this.props.error && this.getLimit() >= 0 && <div className='Textarea-error'>
                        {this.props.error}
                    </div>
                }
            </div>
        )
    }
}

export default Textarea
