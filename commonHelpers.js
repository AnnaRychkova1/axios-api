import{i as m,a as q,S}from"./assets/vendor-7e9429a8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function E(r){r.classList.add("is-hidden")}function O(r){r.classList.remove("is-hidden")}function P(r,t){t.classList.add("is-hidden"),r.disabled=!1}function k(r,t){t.classList.remove("is-hidden"),r.disabled=!0}function T(r){r.disabled=!1}function $(r){r.disabled=!0}const a={hide:E,show:O,enable:P,disable:k,enableBtn:T,disableBtn:$};function x(){m.error({title:"🥺 Ooops...",message:"Please, input query!",position:"center"})}function C(){m.error({title:"🥺 Ooops...",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function I(){m.error({title:"🥺 Ooops...",message:"An error occurred while fetching images. Please try again later.",position:"center"})}function A(){m.info({title:"🥺 Ooops...",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})}const c={noQuery:x,noImg:C,apiError:I,endOfSearch:A};function h(r){r.classList.add("show")}function u(r){r.classList.remove("show")}const e={searchForm:document.querySelector(".form"),resultContainer:document.querySelector(".gallery"),loaderModal:document.querySelector(".overlay"),searchBtn:document.querySelector(".search-btn"),loadMoreBtn:document.querySelector(".load-btn"),preloader:document.querySelector(".preloader"),scrollBtn:document.querySelector(".scroll-btn")};function f(r,t){const s=r.map(({webformatURL:l,largeImageURL:o,tags:n,likes:d,views:M,comments:v,downloads:w})=>`<li class="gallery-item">
    <a class="gallery-link" href="${o}">
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
          <p>${w}</p>
        </li>
      </ul>
  </li>
  `).join("");t.insertAdjacentHTML("beforeend",s)}const F="https://pixabay.com/api",_="41902273-a1675a4e2dad43acb6fd87e89";async function p({query:r,page:t=1,per_page:s}){return(await q.get(`${F}/`,{params:{key:_,q:r,per_page:s,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const y=new S(".gallery a",{captionsData:"alt",captionDelay:250}),i={query:"",page:1,maxPage:0,per_page:30};e.searchForm.addEventListener("submit",B);u(e.loaderModal);const{query:g}=e.searchForm.elements;g.addEventListener("mouseenter",b);function b(){e.searchForm.addEventListener("submit",B),a.enableBtn(e.searchBtn)}async function B(r){a.disableBtn(e.searchBtn),h(e.loaderModal),a.hide(e.loadMoreBtn),r.preventDefault(),e.resultContainer.innerHTML="",i.page=1;const t=r.currentTarget;if(i.query=t.elements.query.value.trim(),!i.query){c.noQuery(),u(e.loaderModal);return}try{const{hits:s,totalHits:l}=await p(i);if(i.maxPage=Math.ceil(l/i.per_page),!s||l===0){c.noImg();return}s.length>0&&s.length!==l?(e.loadMoreBtn.addEventListener("click",L),a.show(e.loadMoreBtn)):(c.endOfSearch(),a.hide(e.loadMoreBtn),a.enableBtn(e.searchBtn)),f(s,e.resultContainer),y.refresh()}catch(s){console.error("Error fetching images:",s),c.apiError()}finally{u(e.loaderModal),t.reset()}}async function L(){h(e.loaderModal),a.disable(e.loadMoreBtn,e.preloader),i.page+=1;try{const{hits:r}=await p(i);f(r,e.resultContainer),y.refresh();const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:1.7*t,behavior:"smooth"})}catch(r){console.error("Error fetching images:",r),c.apiError()}finally{u(e.loaderModal),a.enable(e.loadMoreBtn,e.preloader),i.page===i.maxPage&&(e.loadMoreBtn.removeEventListener("click",L),g.removeEventListener("mouseenter",b),a.hide(e.loadMoreBtn),a.enableBtn(e.searchBtn),c.endOfSearch())}}window.addEventListener("scroll",D);function D(){document.body.scrollTop>30||document.documentElement.scrollTop>30?a.show(e.scrollBtn):a.hide(e.scrollBtn)}e.scrollBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
