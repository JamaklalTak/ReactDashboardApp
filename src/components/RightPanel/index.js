import React, { Component } from 'react';

import SearchBox from './../SearchBox';
import ProfilePicture from './../ProfilePicture';

class RightPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
          userConnectionsProfiles: []
        }
        this.handaleUserSearchButtonClick = this.handaleUserSearchButtonClick.bind(this);
      }
      componentWillMount = () => {
        this.setState({
          userConnectionsProfiles: this.props.userConnectionData.connections
        });
      }
      handaleUserSearchButtonClick = () => {
        const enteredValue = document.getElementById('search-users').value;
        const filteredData = this.props.userConnectionData.connections.filter((data)=> {
          if(data.userName.toLowerCase().includes(enteredValue.toLowerCase()) ||
          data.fullName.toLowerCase().includes(enteredValue.toLowerCase())){
            return data;
          }
        });
        this.setState({
          userConnectionsProfiles: filteredData
        });
      }
    render(){
        return(
            <React.Fragment>
                <SearchBox
                inputId="search-users"
                inputClassName="search-input"
                buttonId="searchUserBtn"
                buttonClassName="search-btn"
                inputType="text"
                handleInputChange={this.handaleUserSearchButtonClick}
                placeholder="Search connection"
                buttonType="button"
                buttonValue="Go"
                handleButtonClick={this.handaleUserSearchButtonClick}
                />
                <h6>My Connections</h6>
                <div className="row border-solid-black ml-10">
                    {this.state.userConnectionsProfiles.map((data, index)=>{
                    return <ProfilePicture key={index} userConnectionData={data}/>
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default RightPanel;