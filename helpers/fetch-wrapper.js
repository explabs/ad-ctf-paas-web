import { userService } from 'services';

// helper functions

function authHeader(url) {
  const user = userService.userValue;
  const isLoggedIn = user && user.authdata;
  const isApiUrl = url.startsWith(process.env.API_URL);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.authdata}` };
  }
  return {};
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && userService.userValue) {
        userService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function get(url) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    credentials: 'include',
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function remove(url) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

export const fetchWrapper = {
  get,
  post,
  put,
  remove
};
