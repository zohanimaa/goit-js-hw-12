import{a as f,S as d,i as n}from"./assets/vendor-CxFKIfsH.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="55700970-bcda54bd417603eeff8d80436",p="https://pixabay.com/api/";function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(p,{params:o}).then(e=>e.data).catch(e=>{throw console.error("Pixabay API error:",e),e})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function b(){u.classList.add("visible")}function c(){u.classList.remove("visible")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search term!"});return}L(),b(),y(o).then(e=>{if(c(),e.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e.hits)}).catch(e=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{c()})});
//# sourceMappingURL=index.js.map
