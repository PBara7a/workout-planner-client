import axios, { AxiosResponse } from "axios";
const host = process.env.REACT_APP_EXERCISE_API_URL;
const tokenKey = process.env.REACT_APP_USER_TOKEN;

interface Client {
  get: (path: string) => Promise<AxiosResponse<any, any>>;
  patch: (path: string, data: object) => Promise<AxiosResponse<any, any>>;
  delete: (path: string) => Promise<AxiosResponse<any, any>>;
  post: (path: string, data: object) => Promise<AxiosResponse<any, any>>;
}

type AuthorizationHeaders = {
  Authorization?: string;
};

const client: Client = {
  get: (path: string) => {
    const url = `${host}${path}`;
    const headers: AuthorizationHeaders = {};

    if (tokenKey) {
      headers.Authorization = `Bearer ${localStorage.getItem(tokenKey)}`;
    }

    return axios.get(url, { headers });
  },

  patch: (path: string, data: object) => {
    const url = `${host}${path}`;
    const headers: AuthorizationHeaders = {};

    if (tokenKey) {
      headers.Authorization = `Bearer ${localStorage.getItem(tokenKey)}`;
    }

    return axios.patch(url, data, { headers });
  },

  delete: (path: string) => {
    const url = `${host}${path}`;
    const headers: AuthorizationHeaders = {};

    if (tokenKey) {
      headers.Authorization = `Bearer ${localStorage.getItem(tokenKey)}`;
    }

    return axios.delete(url, { headers });
  },

  post: (path: string, data: object) => {
    const url = `${host}${path}`;
    const headers: AuthorizationHeaders = {};

    if (tokenKey) {
      headers.Authorization = `Bearer ${localStorage.getItem(tokenKey)}`;
    }

    return axios.post(url, data, { headers });
  },
};

export default client;
