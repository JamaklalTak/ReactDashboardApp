import React, { Component } from 'react';

class Select extends Component {
    render() {
        const {id, className, name, optionsArray, onChange, value } = this.props;
        return (
            <select name={name} className={className} value={value} onChange={onChange}>
                {optionsArray.map((data, index)=>{
                    return <option key={index} id={id+'_'+index}value={data}>{data}</option>
                })}
            </select>
        );
    }
}

export default Select;