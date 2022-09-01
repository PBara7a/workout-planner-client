import axios from "axios";
const host = process.env.REACT_APP_EXERCISE_API_URL;

const client = {
  get: (path) => {
    const url = `${host}${path}`;

    return axios.get(url);
  },

  patch: (path, data) => {
    const url = `${host}${path}`;

    return axios.patch(url, data);
  },

  delete: (path) => {
    const url = `${host}${path}`;

    return axios.delete(url);
  },

  post: (path, data) => {
    const url = `${host}${path}`;

    return axios.post(url, data);
  },
};

export default client;
