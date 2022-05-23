export const productsSlider = () => {
  const sliderContainer = document.querySelector(".product-slider__container");
  const slides = document.querySelectorAll(".product-slider__slide");
  const sliderButtonPrev = document.querySelector(".product-slider__button-prev");
  const sliderButtonNext = document.querySelector(".product-slider__button-next");

  let count = 0;
  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= 520) {
      return (slidesLenght = slides.length - 1);
    } else if (window.innerWidth <= 576) {
      return (slidesLenght = slides.length - 2);
    } else if (window.innerWidth <= 768) {
      return (slidesLenght = slides.length - 3);
    } else if (window.innerWidth <= 1180) {
      return (slidesLenght = slides.length - 4);
    } else {
      return (slidesLenght = slides.length - 5);
    }
  };

  const nextSlide = () => {
    getSlidesLenght();
    if (count === slidesLenght) {
      count = 0;
      rollSlider(count);
    } else {
      count++;
      rollSlider(count);
    }
  };

  const prevSlide = () => {
    getSlidesLenght();
    if (count === 0) {
      count = slidesLenght;
      rollSlider(count);
    } else {
      count--;
      rollSlider(count);
    }
  };

  const rollSlider = (count) => {
    let widthSlide = slides[0].offsetWidth;
    sliderContainer.style.transform = `translate(-${count * widthSlide}px)`;
  };

  sliderButtonNext.addEventListener("click", nextSlide);
  sliderButtonPrev.addEventListener("click", prevSlide);
};
export const starProductsSlider = () => {
  const sliderContainer = document.querySelector(".star-products-slider__container");
  const slides = document.querySelectorAll(".star-products-slider__slide");
  const sliderButtonPrev = document.querySelector(".star-products-slider__button-prev");
  const sliderButtonNext = document.querySelector(".star-products-slider__button-next");

  let count = 0;
  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= 520) {
      return (slidesLenght = slides.length - 1);
    } else if (window.innerWidth < 950) {
      return (slidesLenght = slides.length - 2);
    } else if (window.innerWidth <= 1180) {
      return (slidesLenght = slides.length - 3);
    } else {
      return (slidesLenght = slides.length - 4);
    }
  };

  const nextSlide = () => {
    getSlidesLenght();
    if (count === slidesLenght) {
      count = 0;
      rollSlider(count);
    } else {
      count++;
      rollSlider(count);
    }
  };

  const prevSlide = () => {
    getSlidesLenght();
    if (count === 0) {
      count = slidesLenght;
      rollSlider(count);
    } else {
      count--;
      rollSlider(count);
    }
  };

  const rollSlider = (count) => {
    let widthSlide = slides[0].offsetWidth;
    sliderContainer.style.transform = `translate(-${count * widthSlide}px)`;
  };

  sliderButtonNext.addEventListener("click", nextSlide);
  sliderButtonPrev.addEventListener("click", prevSlide);
};
