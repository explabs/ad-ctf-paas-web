import axios from 'axios';
import jwtDecode from 'jwt-decode';
import router from 'next/router';
import Utils from '../Utils';

const jwtKey = 'jwt';

export const emits = Object.freeze({
  onAutoLogin: 'onAutoLogin',
  onAutoLogout: 'onAutoLogout',
  onNoAccessToken: 'onNoAccessToken',
});

class JwtService extends Utils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => response,
      (err) => new Promise(() => {
        // eslint-disable-next-line no-underscore-dangle
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.emit(emits.onAutoLogout, 'Invalid access_token');
          this.logout();
        }
        throw err;
      }),
    );
  };

  handleAuthentication = () => {
    const accessToken = this.getAccessToken();
    if (!accessToken) {
      this.emit(emits.onNoAccessToken);

      return;
    }

    if (this.isAuthTokenValid(accessToken)) {
      this.setSession(accessToken);
      this.emit(emits.onAutoLogin, true);
    } else {
      this.setSession(null);
      this.emit(emits.onAutoLogout, 'access_token expired');
    }
  };

  createUser = (name, password, ssh) => new Promise((resolve) => {
    axios
      .post('/api/v1/team', {
        name,
        password,
        ssh_pub_key: ssh,
      })
      .then(async (response) => {
        localStorage.setItem('login', response.data.login);
        await router.push(`/login?login=${response.data.login}`);

        resolve(response.data.message);
      });
  });

  signInWithUsernameAndPassword = (username, password) => new Promise((resolve, reject) => {
    axios
      .post('/api/v1/auth/login', {
        username,
        password,
      })
      .then((response) => {
          if (response.data.access_token) {
            this.setSession(response.data.access_token);
            resolve(jwtDecode(response.data.access_token));
        } else {
          reject(response.data.error);
        }
      });
  });

  signInWithToken = () => new Promise((resolve, reject) => {
    const token = this.getAccessToken();
    if (this.isAuthTokenValid(token)) {
      this.setSession(token);
      resolve(jwtDecode(token));
    } else {
      this.logout();
      reject(new Error('Failed to login with token.'));
    }
  })

  setSession = (accessToken) => {
    if (accessToken) {
      window.localStorage.setItem(jwtKey, accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      window.localStorage.removeItem(jwtKey);
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
  };

  isAuthTokenValid = (token) => token && jwtDecode(token).exp >= Date.now() / 1000;

  getAccessToken = () => window.localStorage.getItem(jwtKey);
}

const instance = new JwtService();

export default instance;
