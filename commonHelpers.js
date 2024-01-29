import{i as h,a as S,S as w}from"./assets/vendor-7e9429a8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();function E(e){e.classList.add("is-hidden")}function O(e){e.classList.remove("is-hidden")}function P(e,o){o.classList.add("is-hidden"),e.disabled=!1}function $(e,o){o.classList.remove("is-hidden"),e.disabled=!0}function k(e){e.disabled=!1}function x(e){e.disabled=!0}const i={hide:E,show:O,enable:P,disable:$,enableBtn:k,disableBtn:x};function C(){h.error({title:"🥺 Ooops...",message:"Please, input query!",position:"center"})}function I(){h.error({title:"🥺 Ooops...",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function A(){h.error({title:"🥺 Ooops...",message:"An error occurred while fetching images. Please try again later.",position:"center"})}function F(){h.info({title:"🥺 Ooops...",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})}const c={noQuery:C,noImg:I,apiError:A,endOfSearch:F};function m(e){e.classList.add("show")}function u(e){e.classList.remove("show")}const r={searchForm:document.querySelector(".form"),resultContainer:document.querySelector(".gallery"),loaderModal:document.querySelector(".overlay"),searchBtn:document.querySelector(".search-btn"),loadMoreBtn:document.querySelector(".load-btn"),preloader:document.querySelector(".preloader")};function f(e,o){const a=e.map(({webformatURL:l,largeImageURL:t,tags:n,likes:d,views:M,comments:v,downloads:q})=>`<li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${l}"
        alt="${n}"
      />
    </a>
      <ul class="description">
        <li class="items-descr">
          <h3>Likes</h3>
          <p>${d}</p>
        </li>
        <li class="items-descr">
          <h3>Views</h3>
          <p>${M}</p>
        </li>
        <li class="items-descr">
          <h3>Comments</h3>
          <p>${v}</p>
        </li>
        <li class="items-descr">
          <h3>Downloads</h3>
          <p>${q}</p>
        </li>
      </ul>
  </li>
  `).join("");o.insertAdjacentHTML("beforeend",a)}const T="https://pixabay.com/api",_="41902273-a1675a4e2dad43acb6fd87e89";async function p({query:e,page:o=1,per_page:a}){return(await S.get(`${T}/`,{params:{key:_,q:e,per_page:a,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const y=new w(".gallery a",{captionsData:"alt",captionDelay:250}),s={query:"",page:1,maxPage:0,per_page:30};r.searchForm.addEventListener("submit",L);u(r.loaderModal);const{query:g}=r.searchForm.elements;g.addEventListener("mouseenter",b);function b(){r.searchForm.addEventListener("submit",L),i.enableBtn(r.searchBtn)}async function L(e){i.disableBtn(r.searchBtn),m(r.loaderModal),i.hide(r.loadMoreBtn),e.preventDefault(),r.resultContainer.innerHTML="",s.page=1;const o=e.currentTarget;if(s.query=o.elements.query.value.trim(),!s.query){c.noQuery(),u(r.loaderModal);return}try{const{hits:a,totalHits:l}=await p(s);if(s.maxPage=Math.ceil(l/s.per_page),!a||l===0){c.noImg();return}a.length>0&&a.length!==l?(r.loadMoreBtn.addEventListener("click",B),i.show(r.loadMoreBtn)):(c.endOfSearch(),i.hide(r.loadMoreBtn),i.enableBtn(r.searchBtn)),f(a,r.resultContainer),y.refresh()}catch(a){console.error("Error fetching images:",a),c.apiError()}finally{u(r.loaderModal),o.reset()}}async function B(){m(r.loaderModal),i.disable(r.loadMoreBtn,r.preloader),s.page+=1;try{const{hits:e}=await p(s);f(e,r.resultContainer),y.refresh();const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:1.7*o,behavior:"smooth"})}catch(e){console.error("Error fetching images:",e),c.apiError()}finally{u(r.loaderModal),i.enable(r.loadMoreBtn,r.preloader),s.page===s.maxPage&&(r.loadMoreBtn.removeEventListener("click",B),g.removeEventListener("mouseenter",b),i.hide(r.loadMoreBtn),i.enableBtn(r.searchBtn),c.endOfSearch())}}
//# sourceMappingURL=commonHelpers.js.map
