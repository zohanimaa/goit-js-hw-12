import{a as w,S as b,i as s}from"./assets/vendor-DirGshhi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const v="55700970-bcda54bd417603eeff8d80436",q="https://pixabay.com/api/";async function d(a,t){try{return(await w.get(q,{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(r){throw new r("Pixabay request failed")}}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more"),S=new b(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const t=a.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </li>
  `).join("");u.insertAdjacentHTML("beforeend",t),S.refresh()}function B(){u.innerHTML=""}function p(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}function E(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}const $=document.querySelector(".form"),M=document.querySelector(".load-more");let i="",n=1,L=0;$.addEventListener("submit",async a=>{if(a.preventDefault(),i=a.target.elements["search-text"].value.trim(),!i){s.warning({title:"Warning",message:"Please enter a search term!"});return}n=1,B(),g(),p();try{const t=await d(i,n);if(L=t.totalHits,t.hits.length===0){s.info({message:"No images found!"});return}h(t.hits),E()}catch{s.error({message:"Error fetching images!"})}finally{y()}});M.addEventListener("click",async()=>{n+=1,p();try{const a=await d(i,n);h(a.hits);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),n*15>=L&&(g(),s.info({message:"We're sorry, but you've reached the end of search results."}))}catch{s.error({message:"Error fetching more images!"})}finally{y()}});
//# sourceMappingURL=index.js.map
