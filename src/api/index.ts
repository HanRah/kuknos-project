import axios from 'axios';

export interface User {
  id: number;
  email: string;
  name: string;
};

export interface Post {
  id: number;
  title: string;
  body: string;
}

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getUsers = async (): Promise<User[] | string> => {
  try {
    const { data } = await instance.get<User[]>(
      '/users',
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export const getPosts = async (): Promise<Post[] | string> => {
  try {
    const { data } = await instance.get<Post[]>(
      '/posts'
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}