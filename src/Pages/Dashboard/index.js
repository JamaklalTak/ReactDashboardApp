import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from './../../components/SearchBox';
import MessageContainer from './../../components/MessageContainer';
import RightPanel from './../../components/RightPanel';
import LeftPanel from './../../components/LeftPanel';
import ReactSpinner from './../../helper/ReactLoader';

// import { getUserAllConnectionData } from './action';

class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.UsersConnectionsData = '';
    this.standardMessageCount = 4;
    this.state = {
      showMessage: this.standardMessageCount,
      userConnectionsMessages: []
    }

    this.handalePhraseSearchButtonClick = this.handalePhraseSearchButtonClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentWillMount = () => {
    this.UsersConnectionsData = this.props.userAllData && this.props.userAllData[0] ? this.props.userAllData[0] : '';
    this.setState({
      userConnectionsMessages: this.UsersConnectionsData.connections
    });
  }
  handalePhraseSearchButtonClick = () => {
    const enteredValue = document.getElementById('search-phrase').value;
    const filteredData = this.UsersConnectionsData.connections.filter((data) => {
      if (data.message.toLowerCase().includes(enteredValue.toLowerCase())) {
        return data;
      }
    });
    this.setState({
      userConnectionsMessages: filteredData
    });
  }
  handleScroll = () => {
    if(this.state.showMessage < this.state.userConnectionsMessages.length){
      this.setState({
        setScrollState: true
      }, ()=>{setTimeout(()=>{
        this.setState({
          showMessage: this.state.showMessage + this.standardMessageCount
        })
      }, 3000)});
      
    } else{
      this.setState({
        setScrollState: false
      });
    }
    
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <LeftPanel userData={this.UsersConnectionsData} />
          </div>
          <div className="col-sm-6 middle-container">
            <div>
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
            </div>
            <div className='message-container-part' onScroll={this.handleScroll}>
              {this.state.userConnectionsMessages.map((data, index) => {
                if(index < this.state.showMessage){
                  return <MessageContainer key={index} userConnectionData={data} />
                }
              })}
            </div>
            <div>
              {this.state.setScrollState ?
                <ReactSpinner type='spin' color='#0c0c0c' height='30px' width='30px' className='spinner' />
                :
                ''
              }
            </div>
          </div>
          <div className="col-sm-3 right-container">
            <RightPanel userConnectionData={this.UsersConnectionsData} />
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