export default function renderItemsMarkup(hits, resultContainer) {
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
      <ul class="description">
        <li class="items-descr">
          <h3>Likes</h3>
          <p>${likes}</p>
        </li>
        <li class="items-descr">
          <h3>Views</h3>
          <p>${views}</p>
        </li>
        <li class="items-descr">
          <h3>Comments</h3>
          <p>${comments}</p>
        </li>
        <li class="items-descr">
          <h3>Downloads</h3>
          <p>${downloads}</p>
        </li>
      </ul>
  </li>
  `
    )
    .join('');

  resultContainer.insertAdjacentHTML('beforeend', markup);
}