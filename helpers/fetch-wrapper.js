import getConfig from 'next/config';

import { teamService } from 'services';

const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
  get, post, put, delete: _delete,
};

function authHeader(url) {
  const team = teamService.teamValue;
  const isLoggedIn = team && team.token;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return {
      Authorization: `Bearer ${team.token}`,
    };
  }
  return {};
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && teamService.teamValue) {
        teamService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function get(url) {
  return fetch(url, {
    method: 'GET',
    headers: authHeader(url),
  }).then(handleResponse);
}

function post(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    body: JSON.stringify(body),
  }).then(handleResponse);
}

function put(url, body) {
  return fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    body: JSON.stringify(body),
  }).then(handleResponse);
}

// eslint-disable-next-line no-underscore-dangle
function _delete(url) {
  return fetch(url, {
    method: 'DELETE',
    headers: authHeader(url),
  }).then(handleResponse);
}
