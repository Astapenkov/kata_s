let swiper = null;
const breakpoint = window.matchMedia('(max-width: 320px)');

function initSwiper() {
  if(breakpoint.matches && !swiper) {
    swiper = new Swiper('.swiper', {
     slidesPerView: 'auto',
     spaceBetween: 16,
     loop: false,
     pagination: {
     el: '.swiper-pagination',
     clickable: true,
  },
});
  } else if (!breakpoint.matches && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

initSwiper();
breakpoint.addEventListener('change', initSwiper);


let btn = document.querySelector('.block-with-links_hide_show_button')
let isOpen = false;
btn.innerHTML = '<img class="block-with-links_hide_show_button__show show" src="img/icon3.svg" alt="the show everything button"><span>Показать все</span>'
let showBtn = document.querySelectorAll('.block-with-links_hide_show_button__hide_button')
let hideContent = document.querySelectorAll('.block-with-links_container.swiper-slide')

btn.addEventListener('click', function(){
  isOpen = !isOpen;

  showBtn.forEach(el => {
    el.classList.toggle('show', isOpen);
  });

  hideContent.forEach(el => {
    el.classList.toggle('hidden-content')
  })

  btn.innerHTML = isOpen ? '<img class="block-with-links_hide_show_button__hide " src="img/icon1.svg" alt="hide button"><span>Скрыть</span>': '<img class="block-with-links_hide_show_button__show show" src="img/icon3.svg" alt="the show everything button"> <span>Показать все</span>'
})
