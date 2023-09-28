let magnifierEl = document.querySelector(".magnifier");
let searchContainer = document.querySelector(".searchContainer");

magnifierEl.addEventListener("click",()=>{
    searchContainer.classList.toggle("active");
});