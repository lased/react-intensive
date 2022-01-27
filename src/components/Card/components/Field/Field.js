import { PureComponent } from 'react'

import './Field.css'

class Field extends PureComponent {
    render() {
        return (
            <div className='Field'>
                <span className='Field-label'>{this.props.label}</span>
                {this.props.value}
            </div>
        )
    }
}

export default Field
