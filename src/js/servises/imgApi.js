import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '41902273-a1675a4e2dad43acb6fd87e89';

// https://pixabay.com/api?key=41902273-a1675a4e2dad43acb6fd87e89&q=sky&per_page=9&page=1&image_type=photo&orientation=horizontal&safesearch=true

function searchImageByName({ query, page = 1, per_page }) {
  return axios
    .get(`${BASE_URL}/`, {
      params: {
        key: API_KEY,
        q: query,
        per_page,
        page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(({ data }) => data);
}

export { searchImageByName };