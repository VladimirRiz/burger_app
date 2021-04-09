import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-10ca9-default-rtdb.firebaseio.com/',
});

export default instance;
