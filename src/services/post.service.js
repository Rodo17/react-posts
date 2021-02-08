import { httpRequest } from '../utils/axios';

export const getAllPosts = async () => {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const response = await httpRequest(url, 'get');
        return response.data;
    } catch (error) {
        return error;
    }
};