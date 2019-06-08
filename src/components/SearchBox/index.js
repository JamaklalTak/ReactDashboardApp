import React, { Component } from 'react';

import Button from './../../helper/Button';
import Input from './../../helper/Input';

class SearchBox extends Component {
  render() {
    const {inputId, inputClassName, inputName, inputType, placeholder, inputValue, url, maxlength, defaultvalue, handleInputChange, handleInputClick, inputDisabled, buttonType, buttonValue, handleButtonChange, handleButtonClick, buttonDisable, buttonId, buttonClassName, buttonName} = this.props;
    return (
      <React.Fragment>
        <Input
           id={inputId}
           className={inputClassName}
           name={inputName}
           type={inputType}
           placeholder={placeholder}
           value={inputValue}
           url={url}
           maxlength={maxlength}
           defaultvalue={defaultvalue}
           onChange={handleInputChange}
           onClick={handleInputClick}
           disabled={inputDisabled} 
        />
        <Button
          id={buttonId}
          className={buttonClassName}
          name={buttonName}
          type={buttonType}
          value={buttonValue}
          onChange={handleButtonChange}
          onClick={handleButtonClick}
          disabled={buttonDisable}
        />
      </React.Fragment>
    );
  }
}

export default SearchBox;