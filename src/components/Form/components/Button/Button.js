import { PureComponent } from 'react'

import './Button.css'

export class Button extends PureComponent {
    render() {
        return (
            <button>
                {this.props.children}
            </button>
        )
    }
}

export default Button
