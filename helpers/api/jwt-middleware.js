import getConfig from 'next/config';

const expressJwt = require('express-jwt');
const util = require('util');

const { serverRuntimeConfig } = getConfig();

export function jwtMiddleware(req, res) {
  const middleware = expressJwt({ secret: serverRuntimeConfig.secret, algorithms: ['HS256'] }).unless({
    path: [
      '/api/users/register',
      '/api/users/authenticate',
    ],
  });

  return util.promisify(middleware)(req, res);
}
