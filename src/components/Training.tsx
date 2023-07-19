import 'solid-js';
import { createSignal, onMount } from 'solid-js';

import carouseInit from 'utils/carousel';
import { carouselTeamButtons } from 'data/carousel';
import CarouselTrainings from './CarouselTrainings';
import TrainingPresentation from './TrainingPresentation';
import TrainingModules from './TrainingModules';
import TrainingDifferentials from './TrainingDiferentials';
import TrainingTestimonials from './TrainingTestimonials';
import CTA from './CTA';
import { trainings } from 'data/training';

export default function Trainings() {
  const [active, setActive] = createSignal(0);
  onMount(() => {
    carouseInit({
      carouselItems: trainings,
      buttonSelectors: carouselTeamButtons.map(
        (_, index) => `#trainingCarousel-button-${index}`,
      ),
      carouselSelector: '#trainingCarousel',
      itemSpacing: 32,
      onChange: triggerActive,
      ignoreScrollEnd: true,
    });

    let shownItems = Math.floor(
      document.querySelector('#trainingCarousel')!.clientWidth /
        (document.querySelector('#trainingCarousel *')!.clientWidth + 32),
    );
    window.addEventListener(
      'resize',
      () => {
        shownItems = Math.floor(
          document.querySelector('#trainingCarousel')!.clientWidth /
            (document.querySelector('#trainingCarousel *')!.clientWidth + 32),
        );
        handleFade();
      },
      { passive: true },
    );

    function handleFade() {
      const isMobile = window.innerWidth < 640;
      if (isMobile) {
        return;
      }
      if (active() < trainings.length - shownItems) {
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
    <section class="relative z-[1] w-full bg-[#000830] py-24" id="training">
      <div class="relative z-[2]">
        <div class="container mb-16">
          <div class="mx-auto md:max-w-[600px] md:text-center lg:max-w-[930px]">
            <h2 class="mb-5 font-title text-3xl font-bold uppercase leading-[44px] md:text-4xl">
              <span class="pt-BR">
                Nossos{' '}
                <span class="text-[#FF3158] underline">treinamentos</span>
              </span>
              <span class="en">
                Our <span class="text-[#FF3158] underline">trainings</span>
              </span>
            </h2>
            <h3 class="text-gray-300 md:block">
              <span class="pt-BR">
                A RD Med te prepara para as provas, te ensina inglês para a vida
                e para os estágios e te mentora passo a passo no processo,
                gerando networking, te posicionando nos estágios e cuidando de
                todos os detalhes da sua aplicação. Confira cada um dos nossos
                treinamentos:
              </span>
              <span class="en">
                RD Med prepares you for exams, teaches you English for life and
                for internships and mentors you step by step through the
                process, generating networking, positioning you in internships
                and taking care of all the details of your application. Check
                out each of our trainings:
              </span>
            </h3>
          </div>
        </div>
        <CarouselTrainings id="trainingCarousel" />
        <TrainingPresentation id={active()} />
        <TrainingModules id={active()} />
        <TrainingDifferentials id={active()} />
        <TrainingTestimonials id={active()} />
        <div class="container mt-10 flex w-full flex-col items-center justify-center">
          <CTA>Quero fazer parte</CTA>
          <a
            class="mb-9 mt-16 inline-flex gap-x-2 px-2 py-3 text-sm md:px-5 md:text-base"
            href="#trainingCarousel-button-0"
          >
            <span>Voltar para seleção de treinamentos</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M18.5 15L12.5 9L6.5 15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <hr class="max-h-0 w-full border-t border-[#293b71]" />
        </div>
      </div>
      <img
        class="absolute left-0 top-0 z-[1] hidden md:block md:h-[236px] md:w-[200px] xl:h-[398px] xl:w-[470px]"
        src="/images/training-draw-line-1.png"
        alt="padrão de linhas de fundo"
        width={470}
        height={398}
      />
      <img
        class="absolute right-0 z-[1] hidden md:top-56 md:block md:h-[161px] md:w-[120px] xl:top-40 xl:h-[319px] xl:w-[238px]"
        src="/images/training-draw-line-2.png"
        alt="padrão de linhas de fundo"
        width={238}
        height={319}
      />
    </section>
  );
}
