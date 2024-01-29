import buttonService from "./js/servises/buttonService.js";
import isiToast from './js/servises/isiToast.js';
import { showLoader, hideLoader } from "./js/servises/loaderService.js"
import { refs } from './js/templates/refs.js';
import renderItemsMarkup from './js/templates/renderItemsMarkup.js';
import { searchImageByName } from './js/servises/imgApi.js';
import { lightbox } from "./js/servises/lightBox.js";

const queryParams = {
  query: '',
  page: 1,
  maxPage: 0,
  per_page: 30,
};

refs.searchForm.addEventListener('submit', handleSearch);
hideLoader(refs.loaderModal);

const { query } = refs.searchForm.elements;
query.addEventListener('mouseenter', onMouse);

function onMouse() {
  refs.searchForm.addEventListener('submit', handleSearch);
  buttonService.enableBtn(refs.searchBtn);
}

async function handleSearch(event) {
  buttonService.disableBtn(refs.searchBtn);
  showLoader(refs.loaderModal);
  buttonService.hide(refs.loadMoreBtn);
  event.preventDefault();

  refs.resultContainer.innerHTML = '';
  
  queryParams.page = 1;

  const formQuery = event.currentTarget;
  queryParams.query = formQuery.elements.query.value.trim();

  if (!queryParams.query) {
    isiToast.noQuery();
    hideLoader(refs.loaderModal);
    return;
  }

  try {
    const { hits, totalHits } = await searchImageByName(queryParams);
    queryParams.maxPage = Math.ceil(totalHits / queryParams.per_page);

    if (!hits || totalHits === 0) {
      isiToast.noImg();
      return;
    }

    if (hits.length > 0 && hits.length !== totalHits) {
      refs.loadMoreBtn.addEventListener('click', handleLoadMore);
      buttonService.show(refs.loadMoreBtn);
    } else {
      isiToast.endOfSearch();
      buttonService.hide(refs.loadMoreBtn);
      buttonService.enableBtn(refs.searchBtn);
    }

    renderItemsMarkup(hits, refs.resultContainer);
    lightbox.refresh();
  } catch (error) {
    console.error('Error fetching images:', error);
    isiToast.apiError();
  } finally {
    hideLoader(refs.loaderModal);
    formQuery.reset();
  }
}

async function handleLoadMore() {
  showLoader(refs.loaderModal);
  buttonService.disable(refs.loadMoreBtn, refs.preloader);
  queryParams.page += 1;

  try {
    const { hits } = await searchImageByName(queryParams);
    renderItemsMarkup(hits, refs.resultContainer);

   lightbox.refresh();

    const elementHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
    window.scrollBy({
      top: 1.7 * elementHeight,
      behavior: 'smooth',
    })

  } catch (error) {
    console.error('Error fetching images:', error);
    isiToast.apiError();
  } finally {
    hideLoader(refs.loaderModal);
    buttonService.enable(refs.loadMoreBtn, refs.preloader);

    if (queryParams.page === queryParams.maxPage) {
      refs.loadMoreBtn.removeEventListener('click', handleLoadMore);
      query.removeEventListener('mouseenter', onMouse);
      buttonService.hide(refs.loadMoreBtn);
      buttonService.enableBtn(refs.searchBtn);
      isiToast.endOfSearch();  
    }

  }
}

window.addEventListener('scroll', scrollUp);

function scrollUp() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    buttonService.show(refs.scrollBtn);
  } else {
    buttonService.hide(refs.scrollBtn);
  }
}
refs.scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
