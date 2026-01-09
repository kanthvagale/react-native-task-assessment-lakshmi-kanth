import axios from 'axios';
import { UserPostType } from '../constants/types';
import { checkInternetConnection, showToast } from '../utils/functions';

export const getPosts = async (): Promise<UserPostType[] | []> => {
  try {
    if (!(await checkInternetConnection())) {
      throw new Error('Unable to fetch posts. Check your network connection.');
    }

    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    return response.data;
  } catch (error) {
    let message = 'Something Went Wrong, Please Try Again Later!';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message || message;
    } else if (error instanceof Error) {
      message = error.message;
    }

    showToast({ title: message, type: 'error' });
    return [];
  }
};
