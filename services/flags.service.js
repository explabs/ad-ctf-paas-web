import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

function submit(flag) {
  return fetchWrapper.post(`${baseUrl}flag/submit`, { flag })
    .then((res) => res);
}

export const flagsService = {
  submit,
};
