import axios from 'axios';

const UNSPLASH_ACCESS_KEY = '2KFFxtHBy06GMKWZYoTUIR8mCSRRTDJPlQH_2jZ9sbY'; // Your Unsplash Access Key

export const fetchImages = async (page = 1, query = '') => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
  );
  return response.data;
};
