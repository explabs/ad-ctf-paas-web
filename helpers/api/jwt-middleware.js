import getConfig from 'next/config';

const expressJwt = require('express-jwt');
const util = require('util');

const { serverRuntimeConfig } = getConfig();

export function jwtMiddleware(req, res) {
  return util.promisify(expressJwt({
    secret: serverRuntimeConfig.secret, algorithms: ['HS256'],
  }).unless({
    path: ['/api/teams/authenticate'],
  }))(req, res);
}
