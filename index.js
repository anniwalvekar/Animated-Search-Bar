const searchBarEl = document.querySelector(".search-bar");

const magnifireEl = document.querySelector(".magnifire");

magnifireEl.addEventListener("click", ()=>{
   searchBarEl.classList.toggle("active");
});