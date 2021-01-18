// @flow
import axios, { AxiosRequestConfig } from 'axios';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'http://localhost:3001',
  timeout: 30000,
  params: {},
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

  postWithToken({ url, values = {}, token }) {
    return this.executeRequest(url, {
      method: 'POST',
      data: values,
      headers: { Token: token },
    });
  }

  getWithToken({ url, data = {}, token }) {
    return this.executeRequest(url, {
      method: 'GET',
      data,
      headers: { Token: token },
    });
  }

  putWithToken({ url, values = {}, token }) {
    return this.executeRequest(url, {
      method: 'PUT',
      data: values,
      headers: {
        Token: token,
      },
    });
  }

  deleteWithToken({ url, values = {}, token }) {
    return this.executeRequest(url, {
      method: 'Delete',
      data: values,
      headers: {
        Token: token,
      },
    });
  }

  get({ url, data = {} }) {
    return this.executeRequest(url, {
      method: 'GET',
      data,
    });
  }

  delete({ url, data = {} }) {
    return this.executeRequest(url, {
      method: 'DELETE',
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  update({ url, data = {} }) {
    return this.executeRequest(url, {
      method: 'PATCH',
      data,
    });
  }

  executeRequest(url: any, config: any) {
    const finalConfig = Object.assign({}, this.config, { url, ...config });
    return axios.request(finalConfig)
      .then(successfulRes => Promise.resolve(successfulRes))
      .catch(errorRes => {
        if (errorRes.response.status === 404) {
          window.location.replace('/not-found');
        }
        return (
          Promise.reject(errorRes)
        );
      }
      );
  }
}
