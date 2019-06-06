import React, { Component } from 'react';


class Input extends Component {
    render() {
        const { id, className, name, type, placeholder, value, url, maxlength, defaultvalue, onChange, onClick, disabled } = this.props;
        let input = <input
            value={value}
            defaultValue={defaultvalue}
            name={name}
            className={className}
            id={id}
            placeholder={placeholder}
            type={type}
            url={url}
            maxLength={maxlength}
            onClick={onClick}
            onChange={onChange} />;

        if (disabled === 'true') {
            input = <input
                value={value}
                defaultValue={defaultvalue}
                name={name}
                className={className}
                id={id}
                type={type}
                url={url}
                placeholder={placeholder}
                maxLength={maxlength}
                onClick={onClick}
                onChange={onChange}
                disabled />
        }
        return (
            <React.Fragment>
                { input }
            </React.Fragment>
        );
    }
}

export default Input;