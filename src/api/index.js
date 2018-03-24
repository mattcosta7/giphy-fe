import fetch from 'isomorphic-fetch';
import qs from 'qs';

function get(url, { query, ...opts }) {
  const queryString = qs.stringify(query, { skipNulls: true });
  return fetch(`${url}?${queryString}`).then(res => res.json());
}

export { get };
