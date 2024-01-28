import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function noQuery() {
    iziToast.error({
      title: '🥺 Ooops...',
      message: 'Please, input query!',
      position: 'center',
    });
}

function noImg() {
     iziToast.error({
        title: '🥺 Ooops...',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
      });
}

function apiError() {
     iziToast.error({
      title: '🥺 Ooops...',
      message:
        'An error occurred while fetching images. Please try again later.',
      position: 'center',
    });
}

function endOfSearch() {
    iziToast.info({
        title: '🥺 Ooops...',
        message:
          "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
      });
}

export default { noQuery, noImg, apiError, endOfSearch };