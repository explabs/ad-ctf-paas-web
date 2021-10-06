import { apiHandler } from 'helpers/api';
import getConfig from 'next/config';
import { fetchWrapper } from 'helpers';

const { serverRuntimeConfig } = getConfig();

function authenticate(req, res) {
  return res.status(200).json(fetchWrapper.post(`${serverRuntimeConfig.apiUrl}login`, req.body));
}

export default apiHandler({
  post: authenticate,
});
