import touch from './touch';

type initCarouselProps = {
  carouselSelector: string;
  buttonSelectors: string[];
  carouselItems: object[];
  itemSpacing: number;
  onChange?: (active: number) => void;
  ignoreScrollEnd?: boolean;
};

export default function initCarousel({
  carouselSelector,
  buttonSelectors,
  carouselItems,
  itemSpacing,
  onChange,
  ignoreScrollEnd,
}: initCarouselProps) {
  let itemWidth = document.querySelector(`${carouselSelector} *`)!.clientWidth;

  buttonSelectors.forEach((selector, index) => {
    document
      .querySelector(selector)!
      .addEventListener('click', index ? nextSlide : prevSlide);
  });
  window.addEventListener(
    'resize',
    () => {
      itemWidth = document.querySelector(`${carouselSelector} *`)!.clientWidth;
      if (!ignoreScrollEnd) {
        const previousInitialActive = initialActive;
        initialActive = Math.floor(
          document.querySelector(carouselSelector)!.clientWidth /
            (itemWidth + itemSpacing),
        );
        active = active + initialActive - previousInitialActive;
      }
    },
    { passive: true },
  );
  let initialActive = ignoreScrollEnd
    ? 1
    : Math.floor(
        document.querySelector(carouselSelector)!.clientWidth /
          (itemWidth + itemSpacing),
      );
  let active = initialActive;

  function scrollToActive() {
    onChange?.(active - initialActive);
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
