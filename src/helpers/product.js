import axios from 'axios';

export const getList = () => {
    return axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
}

export const getDetail = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
}