// @flow
import axios, { AxiosRequestConfig } from 'axios';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://translation.googleapis.com/language/translate/v2',
  timeout: 30000,
  params: {
    target: 'vi',
    source: 'en',
    key: 'AIzaSyAeuwHyRY73qs1xrHWBUQl-oj6ilCQmJTI',
  },
};

export default class AxiosService {
  config: any;

  constructor() {
    this.config = Object.assign({}, DEFAULT_API_CONFIG);
  }

  post({ url, data = {} }) {
    return this.executeRequest(url, {
      method: 'POST',
      data,
    });
  }

  get({ url, data = {} }) {
    return this.executeRequest(url, {
      method: 'GET',
      data,
    });
  }

  executeRequest(url: any, config: any) {
    const finalConfig = Object.assign({}, this.config, { url, ...config });
    return axios.request(finalConfig)
      .then(successfulRes => Promise.resolve(successfulRes))
      .catch(errorRes => Promise.reject(errorRes));
  }
}
