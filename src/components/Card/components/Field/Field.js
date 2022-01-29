import { PureComponent } from 'react'

import './Field.css'

class Field extends PureComponent {
    getContents() {
        if (this.props.children) {
            return this.props.children
        }

        return this.props.value
    }

    render() {
        return (
            <div className='Field'>
                <span className='Field-label'>{this.props.label}</span>
                {this.getContents()}
            </div>
        )
    }
}

export default Field
