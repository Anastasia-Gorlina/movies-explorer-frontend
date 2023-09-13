import { BASE_URL } from './Constants.js';

export function register(email, password, name) {
  return fetch(BASE_URL + '/signup', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
    .then(_checkServerResp)
}

export function authorize(email, password) {
  return fetch(BASE_URL + '/signin', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(_checkServerResp)
}

export function signout() {
  return fetch(BASE_URL + '/signout', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(_checkServerResp)
}

function _checkServerResp(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}