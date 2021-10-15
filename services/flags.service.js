import { fetchWrapper } from 'helpers';

function submit(flag) {
  return fetchWrapper.post(`${process.env.API_URL}flag/submit`, { flag })
    .then((res) => res);
}

export const flagsService = {
  submit,
};
