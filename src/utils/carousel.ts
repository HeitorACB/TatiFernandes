import touch from './touch';

type initCarouselProps = {
  carouselSelector: string;
  buttonSelectors: string[];
  onChange?: (active: number) => void;
  ignoreScrollEnd?: boolean;
};

export default function initCarousel({
  carouselSelector,
  buttonSelectors,
  onChange,
  ignoreScrollEnd,
}: initCarouselProps) {
  const carouselItems = [
    ...document.querySelectorAll(`${carouselSelector} > *`)!,
  ] as HTMLElement[];
  const carousel = document.querySelector(carouselSelector)!;

  let itemWidth = carouselItems[0].clientWidth;

  let carouselWidth = carousel.clientWidth;

  let itemSpacing =
    carouselItems[1].offsetLeft - carouselItems[0].offsetLeft - itemWidth;

  buttonSelectors.forEach((selector, index) => {
    document
      .querySelector(selector)!
      .addEventListener('click', index ? nextSlide : prevSlide, {
        passive: true,
      });
  });

  window.addEventListener(
    'resize',
    () => {
      itemWidth = carouselItems[0].clientWidth;
      carouselWidth = carousel.clientWidth;
      itemSpacing =
        carouselItems[1].offsetLeft - carouselItems[0].offsetLeft - itemWidth;

      if (!ignoreScrollEnd) {
        const previousInitialActive = initialActive;
        initialActive = Math.floor(carouselWidth / (itemWidth + itemSpacing));
        active = active + initialActive - previousInitialActive;
      }
    },
    { passive: true },
  );
  let initialActive = ignoreScrollEnd
    ? 1
    : Math.floor(carouselWidth / (itemWidth + itemSpacing));
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

  function handleChangeToActive(index: number) {
    active = index + initialActive;
    scrollToActive();
  }

  return handleChangeToActive;
}
