const slickConfig = {
  enabled: true,
  autoplay: false,
  draggable: true,
  autoplaySpeed: 3000,
  responsive: false,
  cssEase: 'cubic-bezier(0, 0, 0.2, 1)',
  infinite: true,
  speed: 500,
  dots: true,
  arrows: true,
  lazyLoad: true,
  nextArrow: `<button type="button" id="right" class="slick-next">
              <i class="material-icons">arrow_forward</i></button>`,
  prevArrow: `<button type="button" id="left" class="slick-prev">
              <i class="material-icons">arrow_back</i></button>`,
};

export default slickConfig;
