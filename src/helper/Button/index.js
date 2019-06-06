import React, { Component } from 'react';


class Button extends Component {
    render() {
        const { id, className, type, name, value, onChange, onClick, disabled } = this.props;
        let button = <button
            value={value}
            name={name}
            className={className}
            id={id}
            type={type}
            onClick={onClick}
            onChange={onChange}>
            {value}
        </button>;
        if (disabled === 'true') {
            button = <button
                value={value}
                name={name}
                className={className}
                id={id}
                type={type}
                onClick={onClick}
                onChange={onChange}
                disabled>
                {value}
            </button>
        }
        return (
            <React.Fragment>
                { button }
            </React.Fragment>
        );
    }
}

export default Button;