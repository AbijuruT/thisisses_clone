var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  //   loop: true,
  arrow: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
// search form toggle on and off
/*===== EXPANDER MENU  =====*/ 
const showForm = (toggleId)=>{
  const toggle = document.getElementById(toggleId),
    searchForm = document.getElementById('form');

  if(toggle){
    toggle.addEventListener('click', ()=>{
      searchForm.classList.toggle("none");
    })
  }
}
showForm('form-search')

