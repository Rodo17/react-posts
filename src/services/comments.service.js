import { httpRequest } from '../utils/axios';

export const getCommentsByPostId = async (id) => {
    try {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        const response = await httpRequest(url, 'get');
        return response.data;
    } catch (error) {
        return error;
    }
};