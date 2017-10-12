// src/Auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'jacked.auth0.com',
    clientID: 'QBNKjr18yImATZi5rw7z0l6i3dHKJ4Om',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://jacked.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}