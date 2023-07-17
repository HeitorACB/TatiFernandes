import 'solid-js';
import { createSignal, onMount } from 'solid-js';

import carouseInit from 'utils/carousel';
import { carouselTrainingsItems, carouselTeamButtons } from 'carouselData';
import CarouselTrainings from './CarouselTrainings';

export default function Trainings() {
  const [active, setActive] = createSignal(0);
  onMount(() => {
    carouseInit({
      carouselItems: carouselTrainingsItems,
      buttonSelectors: carouselTeamButtons.map(
        (_, index) => `#trainingCarousel-button-${index}`,
      ),
      carouselSelector: '#trainingCarousel',
      itemSpacing: 32,
      onChange: triggerActive,
      ignoreScrollEnd: true,
    });

    console.log('exec');

    let shownItems = Math.floor(
      document.querySelector('#trainingCarousel')!.clientWidth /
        (document.querySelector('#trainingCarousel *')!.clientWidth + 32),
    );
    window.addEventListener('resize', () => {
      shownItems = Math.floor(
        document.querySelector('#trainingCarousel')!.clientWidth /
          (document.querySelector('#trainingCarousel *')!.clientWidth + 32),
      );
      handleFade();
    });

    function handleFade() {
      const isMobile = window.innerWidth < 640;
      if (isMobile) {
        return;
      }
      if (active() < carouselTrainingsItems.length - shownItems) {
        document
          .querySelector('#trainingCarousel-fade-left')!
          .classList.add('sm:hidden');
        document
          .querySelector('#trainingCarousel-fade-right')!
          .classList.remove('sm:hidden');
        return;
      }
      document
        .querySelector('#trainingCarousel-fade-right')!
        .classList.add('sm:hidden');
      document
        .querySelector('#trainingCarousel-fade-left')!
        .classList.remove('sm:hidden');
    }

    const handleStyleActive = (item: Element, index: number) => {
      const description = item.querySelector('p:last-of-type')!;
      if (index !== active()) {
        item.classList.remove('bg-[#203DE2]');
        description.classList.remove('text-white');
      } else {
        item.classList.add('bg-[#203DE2]');
        description.classList.add('text-white');
      }
    };

    function triggerActive(newActive: number) {
      setActive(newActive);
      handleFade();

      document
        .querySelectorAll('#trainingCarousel > *')
        .forEach(handleStyleActive);
      document
        .querySelectorAll('#trainingCarouselMobile > *')
        .forEach(handleStyleActive);
    }
    triggerActive(0);
  });
  return (
    <section class="relative z-[1] w-full bg-[#000830] py-24">
      <div class="relative z-[2]">
        <div class="container mb-16">
          <div class="mx-auto max-w-[930px] md:text-center">
            <h2 class="mb-5 font-title text-3xl font-bold uppercase leading-[44px] md:text-4xl">
              Nossos <span class="text-[#FF3158] underline">treinamentos</span>
            </h2>
            <h3 class="hidden text-gray-300 md:block">
              A RD Med te prepara para as provas, te ensina inglês para a vida e
              para os estágios e te mentora passo a passo no processo, gerando
              networking, te posicionando nos estágios e cuidando de todos os
              detalhes da sua aplicação. Confira cada um dos nossos
              treinamentos:
            </h3>
          </div>
        </div>
        <CarouselTrainings id="trainingCarousel" />
      </div>
      <img
        class="absolute left-0 top-0 z-[1]"
        src="/images/trainings-draw-line-1.png"
        alt="padrào de linhas de fundo"
        width={398}
        height={436}
      />
    </section>
  );
}
