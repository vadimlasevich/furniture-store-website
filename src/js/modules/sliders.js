import { carousel } from './carouselSlider.js';

export const productsSlider = () => {
  const slides = document.querySelectorAll('.product-slider__slide');
  const windowWidth = {
    xSmall: 520,
    small: 576,
    medium: 768,
    extraLarge: 1180,
  };

  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= windowWidth.xSmall) {
      return (slidesLenght = slides.length - 1);
    } else if (window.innerWidth <= windowWidth.small) {
      return (slidesLenght = slides.length - 2);
    } else if (window.innerWidth <= windowWidth.medium) {
      return (slidesLenght = slides.length - 3);
    } else if (window.innerWidth <= windowWidth.extraLarge) {
      return (slidesLenght = slides.length - 4);
    } else {
      return (slidesLenght = slides.length - 5);
    }
  };

  getSlidesLenght();
  carousel(slidesLenght, 'product');
};

export const starProductsSlider = () => {
  const slides = document.querySelectorAll('.star-products-slider__slide');
  const windowWidth = {
    xSmall: 520,
    large: 950,
    extraLarge: 1180,
  };

  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= windowWidth.xSmall) {
      return (slidesLenght = slides.length - 1);
    } else if (window.innerWidth < windowWidth.large) {
      return (slidesLenght = slides.length - 2);
    } else if (window.innerWidth <= windowWidth.extraLarge) {
      return (slidesLenght = slides.length - 3);
    } else {
      return (slidesLenght = slides.length - 4);
    }
  };

  getSlidesLenght();
  carousel(slidesLenght, 'star-products');
};
