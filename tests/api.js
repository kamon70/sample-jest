// const axios = require('axios');


import Axios from '../node_modules/axios/index';

export function sampleGet() {
  return Axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

export function sampleGet2() {
  return Axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
}

