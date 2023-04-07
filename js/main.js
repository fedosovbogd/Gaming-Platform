
const showListBtn = document.querySelector(".list__btn");
const listOpened = document.querySelector(".list__items--showed");
const showProjectsBtn = document.querySelector(".projects__btn");
const projectsOpened = document.querySelector(".projects__content--showed");
const mobileMenu = document.querySelector('.menu__mobile')
const aboutSlider = document.querySelector('.about__slider')
const teamSlider = document.querySelector('.team__slider')
const commentsSlider = document.querySelector('.comments__slider')
if(aboutSlider){
  $(aboutSlider).slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
})
};
if(teamSlider){
  $(teamSlider).slick({
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  infinite: true,
  speed: 600,
  autoplay:true,
  autoplaySpeed:3000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1301,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1031,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 721,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})
};
if(commentsSlider){
$(commentsSlider).slick({
    dots: true,
    arrows: true,
    slidesToShow:3,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    autoplay:false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1385,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 721,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 800
        }
      }
    ]
  })
};
  document.querySelectorAll('.menu__mobile-btn').forEach(btn => {
  btn.addEventListener('click', e => {
      btn.classList.toggle('active');
      mobileMenu.classList.toggle('menu__mobile--active')})
  });


if(showListBtn) {
  showListBtn.addEventListener("click", function () {
  const isListClosed = listOpened.classList.toggle("list__items--hidden");
  if (isListClosed === false) {
    showListBtn.textContent = "CLOSE";
  } else {
    showListBtn.textContent = "SEE ALL";
  }
})
};

if(showProjectsBtn) {
showProjectsBtn.addEventListener("click", function () {
  const isProjectsOpened = projectsOpened.classList.toggle(
    "projects__content--hidden"
  );
  if (isProjectsOpened === true) {
    showProjectsBtn.textContent = "SEE ALL";
  } else showProjectsBtn.textContent = "CLOSE";
})}
;




