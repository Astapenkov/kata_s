const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


let BTN = document.querySelector('.block-with-links_hide_show_button')
let showBtn = document.querySelectorAll('.block-with-links_hide_show_button__hide_button')
let hideBtn = document.querySelectorAll('.block-with-links_hide_show_button__show_button')
let hideContent = document.querySelectorAll('.block-with-links_container.swiper-slide')

BTN.addEventListener('click', function() {
  showBtn.forEach(el => {
    el.classList.toggle('show')
    
   
    
  })

  hideBtn.forEach(el => {
    el.classList.toggle('hide')
   
    
    
  })

  hideContent.forEach(el => {
    el.classList.toggle('hidden-content')
  })

  
  console.log(showBtn)
})