import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from './../../components/SearchBox';
import MessageContainer from './../../components/MessageContainer';
import RightPanel from './../../components/RightPanel';
import LeftPanel from './../../components/LeftPanel';

// import { getUserAllConnectionData } from './action';

class GlobalHeader extends Component {
  constructor(props){
    super(props);
    this.UsersConnectionsData = '';
    this.state = {
      userConnectionsMessages: []
    }
    this.handalePhraseSearchButtonClick = this.handalePhraseSearchButtonClick.bind(this);
  }
  componentWillMount = () => {
    this.UsersConnectionsData = this.props.userAllData && this.props.userAllData[0] ? this.props.userAllData[0] : '';
    this.setState({
      userConnectionsMessages: this.UsersConnectionsData.connections
    });
  }
  handalePhraseSearchButtonClick = () => {
    const enteredValue = document.getElementById('search-phrase').value;
    const filteredData = this.UsersConnectionsData.connections.filter((data)=> {
      if(data.message.toLowerCase().includes(enteredValue.toLowerCase())){
        return data;
      }
    });
    this.setState({
      userConnectionsMessages: filteredData
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <LeftPanel userData={this.UsersConnectionsData}/>
          </div>
          <div className="col-sm-6 middle-container">
            <SearchBox
              inputId="search-phrase"
              inputClassName="search-input"
              buttonId="searchPhraseBtn"
              buttonClassName="search-btn"
              inputType="text"
              placeholder="Search any word or phrase"
              buttonType="button"
              buttonValue="Go"
              handleInputChange={this.handalePhraseSearchButtonClick}
              handleButtonClick={this.handalePhraseSearchButtonClick}
            />
            {this.state.userConnectionsMessages.map((data, index)=>{
              return <MessageContainer key={index} userConnectionData={data}/>
            })}
          </div>
          <div className="col-sm-3 right-container">
            <RightPanel userConnectionData={this.UsersConnectionsData}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userAllData: state.userDetail.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // getUserConnectionsData: ()=> dispatch(getUserAllConnectionData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
// export default GlobalHeader;