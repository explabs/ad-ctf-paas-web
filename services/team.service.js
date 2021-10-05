import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';

const Jwt = require('jsonwebtoken');

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

function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

function login(name, password) {
  return fetchWrapper.post(`${baseUrl}login`, { username: name, password })
    .then((res) => {
      setCookie('jwt', res.token, { secure: true });
    });
}

function logout() {
  deleteCookie('jwt');
  Router.push('/');
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}

export const teamService = {
  get team() { return Jwt.decode(process.browser && getCookie('jwt')); },
  get jwt() { return process.browser && getCookie('jwt'); },
  login,
  logout,
  getAll,
};
