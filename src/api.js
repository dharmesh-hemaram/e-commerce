import axios from 'axios';

export default axios.create({
  baseURL: 'https://fakestoreapi.com/'
});

export const STATUS = {
  LOADING: 'loading',
  COMPLETED: 'completed',
  IDLE: 'idle',
  ERROR: 'error'
}