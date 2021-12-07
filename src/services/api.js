import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ec2-184-72-122-97.compute-1.amazonaws.com:8080/'
  });

export default api;


// http://ec2-184-72-122-97.compute-1.amazonaws.com:8080/products/categories