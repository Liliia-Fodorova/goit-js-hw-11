import{a as d,S as f,i}from"./assets/vendor-DuGZWQNR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/",p="54644062-931f8757c3983fa8d6dda8238";function m(n){return console.log(n),d.get(g,{params:{key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>(console.log(r.data),r.data))}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){console.log(n),console.log(n.length);const r=n.map(t=>`
        <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}"
                    alt="${t.tags}"
                    loading="lazy"/>
            </a>
            <div class="info">
                <p><strong>Likes</strong> ${t.likes}</p>
                <p><strong>Views</strong> ${t.views}</p>
                <p><strong>Comments</strong> ${t.comments}</p>
                <p><strong>Downloads</strong> ${t.downloads}</p>
            </div>
        </li>
        
    `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function w(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",S);function S(n){n.preventDefault();const r=n.target.elements["search-text"].value.trim();if(r===""){i.warning({message:"Please enter a search query!",position:"topRight"});return}L(),w(),m(r).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits)}).catch(()=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b()}),u.reset()}
//# sourceMappingURL=index.js.map
