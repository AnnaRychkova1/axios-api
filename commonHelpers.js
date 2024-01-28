import{i as h,a as v,S as q}from"./assets/vendor-7e9429a8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();function S(e){e.classList.add("is-hidden")}function w(e){e.classList.remove("is-hidden")}function E(e,o){o.classList.add("is-hidden"),e.disabled=!1}function O(e,o){o.classList.remove("is-hidden"),e.disabled=!0}function P(e){e.disabled=!1}function x(e){e.disabled=!0}const l={hide:S,show:w,enable:E,disable:O,enableBtn:P,disableBtn:x};function $(){h.error({title:"🥺 Ooops...",message:"Please, input query!",position:"center"})}function k(){h.error({title:"🥺 Ooops...",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function C(){h.error({title:"🥺 Ooops...",message:"An error occurred while fetching images. Please try again later.",position:"center"})}function I(){h.info({title:"🥺 Ooops...",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})}const d={noQuery:$,noImg:k,apiError:C,endOfSearch:I};function m(e){e.classList.add("show")}function u(e){e.classList.remove("show")}const r={searchForm:document.querySelector(".form"),resultContainer:document.querySelector(".gallery"),loaderModal:document.querySelector(".overlay"),searchBtn:document.querySelector(".search-btn"),loadMoreBtn:document.querySelector(".load-btn"),preloader:document.querySelector(".preloader")};function f(e,o){const a=e.map(({webformatURL:s,largeImageURL:t,tags:n,likes:c,views:L,comments:B,downloads:M})=>`<li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${n}"
      />
    </a>
      <ul class="description">
        <li class="items-descr">
          <h3>Likes</h3>
          <p>${c}</p>
        </li>
        <li class="items-descr">
          <h3>Views</h3>
          <p>${L}</p>
        </li>
        <li class="items-descr">
          <h3>Comments</h3>
          <p>${B}</p>
        </li>
        <li class="items-descr">
          <h3>Downloads</h3>
          <p>${M}</p>
        </li>
      </ul>
  </li>
  `).join("");o.insertAdjacentHTML("beforeend",a)}const A="https://pixabay.com/api",F="41902273-a1675a4e2dad43acb6fd87e89";function p({query:e,page:o=1,per_page:a}){return v.get(`${A}/`,{params:{key:F,q:e,per_page:a,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:s})=>s)}function g(){var e=new q(".gallery a",{captionsData:"alt",captionDelay:250});e.refresh()}const i={query:"",page:1,maxPage:0,per_page:30},{query:T}=r.searchForm.elements;T.addEventListener("mouseenter",_);function _(){r.searchForm.addEventListener("submit",y),l.enableBtn(r.searchBtn)}r.searchForm.addEventListener("submit",y);u(r.loaderModal);async function y(e){l.disableBtn(r.searchBtn),m(r.loaderModal),e.preventDefault(),r.resultContainer.innerHTML="",i.page=1;const o=e.currentTarget;if(i.query=o.elements.query.value.trim(),!i.query){d.noQuery(),u(r.loaderModal);return}try{const{hits:a,totalHits:s}=await p(i);if(i.maxPage=Math.ceil(s/i.per_page),!a||s===0){d.noImg();return}a.length>0&&a.length!==s?(r.loadMoreBtn.addEventListener("click",b),l.show(r.loadMoreBtn)):(l.hide(r.loadMoreBtn),l.enableBtn(r.searchBtn)),f(a,r.resultContainer),g()}catch(a){console.error("Error fetching images:",a),d.apiError()}finally{u(r.loaderModal),o.reset()}}async function b(){m(r.loaderModal),l.disable(r.loadMoreBtn,r.preloader),i.page+=1;try{const{hits:e}=await p(i);f(e,r.resultContainer),g();const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:1.7*o,behavior:"smooth"})}catch(e){console.error("Error fetching images:",e),d.apiError()}finally{u(r.loaderModal),l.enable(r.loadMoreBtn,r.preloader),i.page===i.maxPage&&(l.hide(r.loadMoreBtn),r.loadMoreBtn.removeEventListener("click",b),l.enableBtn(r.searchBtn),d.endOfSearch())}}
//# sourceMappingURL=commonHelpers.js.map
