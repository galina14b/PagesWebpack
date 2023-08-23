import Glide from '@glidejs/glide';

new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
  perView: 3,
  breakpoints: {
    1200: { perView: 3 },
    1024: { perView: 2 },
    870: { perView: 1 },
  },
  
  autoplay: 4000,
}).mount();
