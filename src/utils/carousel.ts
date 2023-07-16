import touch from './touch';

type initCarouselProps = {
  carouselSelector: string;
  buttonSelectors: string[];
  carouselItems: object[];
  itemWidth: number;
  itemSpacing: number;
};

export default function initCarousel({
  carouselSelector,
  buttonSelectors,
  carouselItems,
  itemWidth,
  itemSpacing,
}: initCarouselProps) {
  buttonSelectors.forEach((selector, index) => {
    document
      .querySelector(selector)!
      .addEventListener('click', index ? nextSlide : prevSlide);
  });
  window.addEventListener('resize', () => {
    const previousInitialActive = initialActive;
    initialActive = Math.floor(
      document.querySelector(carouselSelector)!.clientWidth /
        (itemWidth + itemSpacing),
    );
    active = active + initialActive - previousInitialActive;
  });
  let initialActive = Math.floor(
    document.querySelector(carouselSelector)!.clientWidth /
      (itemWidth + itemSpacing),
  );
  let active = initialActive;

  function scrollToActive() {
    document.querySelector(carouselSelector)!.scrollTo({
      left: (active - initialActive) * (itemWidth + itemSpacing),
      behavior: 'smooth',
    });
  }
  function nextSlide() {
    active = active === carouselItems.length ? initialActive : active + 1;
    scrollToActive();
  }
  function prevSlide() {
    active = active === initialActive ? carouselItems.length : active - 1;
    scrollToActive();
  }
  function handleSlide(direction: 'left' | 'right' | 'up' | 'down') {
    if (direction === 'left') {
      nextSlide();
    } else if (direction === 'right') {
      prevSlide();
    }
  }
  touch(carouselSelector, handleSlide);
}
