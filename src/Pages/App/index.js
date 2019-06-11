import React from 'react';
import { connect } from 'react-redux';
import MainRoutes from '../../routes';
import GlobalHeader from '../../components/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter';

import './../../css';

class App extends React.Component {
  
  render() {
    const { userAllData } = this.props;
    const userDetail = userAllData && userAllData[0] && userAllData[0].userName ? userAllData[0] : '';
    return (
      <React.Fragment>
        <GlobalHeader userData={userAllData}/>
        <MainRoutes store={userDetail}/>
        <GlobalFooter />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userAllData: state.userDetail.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);