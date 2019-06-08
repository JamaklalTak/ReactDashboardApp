import React from 'react';
import { connect } from 'react-redux';
import MainRoutes from '../../routes';
import GlobalHeader from '../../components/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter';

import './../../css';

class App extends React.Component {
  render() {
    const { userAllData } = this.props;
    return (
      <React.Fragment>
        <GlobalHeader userData={userAllData}/>
        <MainRoutes store={userAllData}/>
        <GlobalFooter />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userAllData: state.userConnectionsData.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);