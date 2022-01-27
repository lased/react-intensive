import { PureComponent } from 'react'

import './Textarea.css'

export class Textarea extends PureComponent {
    render() {
        return (
            <div className='Textarea'>
                <label className='Textarea-label'>{this.props.label}</label>
                <textarea
                    className='Textarea-field'
                    name={this.props.name}
                    value={this.props.value}
                    maxLength={this.props.maxLength}
                    onChange={this.props.onChange}
                ></textarea>
                {
                    this.props.error && <div className='Textarea-error'>{this.props.error}</div>
                }
            </div>
        )
    }
}

export default Textarea
