export const carousel = (slidesLenght, sectionName) => {
  const sliderContainer = document.querySelector(`.${sectionName}-slider__container`);
  const slides = document.querySelectorAll(`.${sectionName}-slider__slide`);
  const sliderButtonPrev = document.querySelector(`.${sectionName}-slider__button-prev`);
  const sliderButtonNext = document.querySelector(`.${sectionName}-slider__button-next`);

  let count = 0;

  const nextSlide = () => {
    if (count === slidesLenght) {
      count = 0;
      rollSlider(count);
    } else {
      count++;
      rollSlider(count);
    }
  };

  const prevSlide = () => {
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

  sliderButtonNext.addEventListener('click', nextSlide);
  sliderButtonPrev.addEventListener('click', prevSlide);
};
