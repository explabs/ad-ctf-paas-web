import { apiHandler } from 'helpers/api';
import getConfig from 'next/config';
import { fetchWrapper } from 'helpers';

const { serverRuntimeConfig } = getConfig();

function register(req, res) {
  return res.status(200).json(fetchWrapper.post(`${serverRuntimeConfig.apiUrl}team`));
}

export default apiHandler({
  post: register,
});
