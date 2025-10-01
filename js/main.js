let Lt = document.querySelector(".navbar-togler")
, It = document.querySelector(".navbar-items");
Lt.addEventListener("click", ()=>{
  It.classList.toggle("navbar-items--active"),
  Lt.classList.toggle("navbar-togler--active"),
  document.body.classList.toggle("dis-scroll"),
  "Open menu" === Lt.getAttribute("aria-label") ? Lt.setAttribute("aria-label", "Open menu") : Lt.setAttribute("aria-label", "Close menu")
}
);
