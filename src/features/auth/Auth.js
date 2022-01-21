import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { hideMessage, showMessage } from '../../store/core/messageSlice';
import jwtService, { emits } from '../../services/jwtService';
import SplashScreen from '../../../components/SplashScreen';

import {
  setUserData, logoutUser,
} from './store/userSlice';

class Auth extends Component {
  state = {
    waitAuthCheck: true,
  };

  componentDidMount() {
    return Promise.all([
      this.jwtCheck(),
    ]).then(() => {
      this.setState({ waitAuthCheck: false });
    });
  }

  jwtCheck = () => new Promise((resolve) => {
    jwtService.on(emits.onAutoLogin, () => {
      // eslint-disable-next-line react/prop-types,react/destructuring-assignment
      this.props.showMessage({ message: 'Logging in' });

      jwtService
        .signInWithToken()
        .then((token) => {
          // eslint-disable-next-line react/prop-types,react/destructuring-assignment
          this.props.setUserData(token);

          resolve();

          // eslint-disable-next-line react/prop-types,react/destructuring-assignment
          this.props.showMessage({ message: 'Logged in' });
        })
        .catch((error) => {
          this.props.showMessage({ message: error.message });

          resolve();
        });
    });

    jwtService.on(emits.onAutoLogout, (message) => {
      if (message) {
        // eslint-disable-next-line react/prop-types,react/destructuring-assignment
        this.props.showMessage({ message });
      }

      // eslint-disable-next-line react/prop-types,react/destructuring-assignment
      this.props.logout();

      resolve();
    });

    jwtService.on(emits.onNoAccessToken, () => {
      resolve();
    });

    jwtService.init();

    return Promise.resolve();
  });

  render() {
    return this.state.waitAuthCheck ? <SplashScreen /> : <>{this.props.children}</>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout: logoutUser,
      setUserData,
      showMessage,
      hideMessage,
    },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(Auth);
