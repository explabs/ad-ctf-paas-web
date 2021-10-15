import { BehaviorSubject } from 'rxjs';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';

const Jwt = require('jsonwebtoken');

function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1,
  });
}

const jwtSubject = new BehaviorSubject(process.browser && getCookie('jwt'));

function login(username, password) {
  return fetchWrapper.post(`${process.env.API_URL}login`, { username, password })
    .then((res) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      jwtSubject.next(res.token);
      setCookie('jwt', res.token);

      return res;
    });
}

function logout() {
  deleteCookie('jwt');
  jwtSubject.next(null);
  Router.push('/login');
}

function register(team) {
  return fetchWrapper.post(`${process.env.API_URL}register`, team);
}

export const userService = {
  jwt: jwtSubject.asObservable(),
  get jwtValue() { return jwtSubject.value; },
  get team() { return Jwt.decode(this.jwtValue); },
  login,
  logout,
  register,
};
