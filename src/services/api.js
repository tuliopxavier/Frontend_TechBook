import axios from 'axios';

const api = axios.create({
    baseURL: 'https://techbookdh.herokuapp.com/'
  });

export default api;

// https://techbookdh.herokuapp.com/products/categories
// http://ec2-184-72-122-97.compute-1.amazonaws.com:8080/products/categories