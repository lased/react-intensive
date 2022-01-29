import { PureComponent } from 'react'

import './Button.css'

class Button extends PureComponent {
    getClassName() {
        return this.props.design && `Button-${this.props.design}`
    }

    render() {
        return (
            <button
                className={`Button ${this.getClassName()}`}
                type={this.props.type}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Button
