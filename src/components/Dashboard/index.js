import React, { Component } from 'react';

import SearchBox from './../../helper/SearchBox';
import MessageContainer from './../MessageContainer';
import Image from './../../helper/Image';
import LeftPanel from './../LeftPanel';
import ProfilePicture from './../ProfilePicture';

import appLogo from './../../Images/socialAppLogo.png';
class GlobalHeader extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <LeftPanel />
          </div>
          <div className="col-sm-6 middle-container">
            <SearchBox
              inputId="search-phrase"
              inputClassName="search-input"
              inputName=""
              buttonId=""
              buttonClassName="search-btn"
              buttonName=""
              inputType="text"
              placeholder="Search any word or phrase"
              // inputValue=""
              url=""
              maxlength=""
              defaultvalue=""
              // handleInputChange={}
              // handleInputClick={}
              disableInput=""
              buttonType="button"
              buttonValue="Go"
              // handleButtonChange=""
              // handleButtonClick=""
              disableButton=""
            />
            <MessageContainer />
            <MessageContainer />
          </div>
          <div className="col-sm-3 right-container">
            <SearchBox
              inputId="search-user-connection"
              inputClassName="search-input"
              inputName=""
              buttonId=""
              buttonClassName="search-btn"
              buttonName=""
              inputType="text"
              placeholder="Search connection"
              // inputValue=""
              url=""
              maxlength=""
              defaultvalue=""
              // handleInputChange=""
              // handleInputClick=""
              disableInput=""
              buttonType="button"
              buttonValue="Go"
              // handleButtonChange=""
              // handleButtonClick=""
              disableButton=""
            />
            <h6>My Connections</h6>
            <div className="row border-solid-black ml-10">
              <ProfilePicture />
              <ProfilePicture />
              <ProfilePicture />
              <ProfilePicture />
              <ProfilePicture />
              <ProfilePicture />
              <ProfilePicture />
              <ProfilePicture />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalHeader;