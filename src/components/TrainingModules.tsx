import 'solid-js';
import { carouselModuleButtons } from 'data/carousel';
import { trainings } from 'data/training';
import { onMount } from 'solid-js';
import carouseInit from 'utils/carousel';
export default function TrainingModules(props: { id: number }) {
  onMount(() => {
    carouseInit({
      carouselItems: trainings[props.id].modules,
      buttonSelectors: carouselModuleButtons.map(
        (_, index) => `#carousel-training-button-${index}`,
      ),
      carouselSelector: '#carousel-training',
      itemSpacing: 32,
    });
  });

  return (
    <>
      <div class="container mb-8 flex justify-between">
        <h3 class="font-title text-[30px] font-semibold uppercase leading-tight tracking-[2.55px]">
          Módulos
        </h3>
        <div class="flex gap-x-8">
          {carouselModuleButtons.map(({ label, icon }, index) => (
            <button
              id={`carousel-training-button-${index}`}
              class="flex h-14 w-14 items-center justify-center rounded-full border border-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d={icon}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="sr-only">{label}</span>
            </button>
          ))}
        </div>
      </div>
      <div class="relative">
        <div
          id="carousel-training"
          class="relative z-[2] flex w-full gap-x-8 overflow-x-hidden px-3 md:ml-[calc((100%-768px)/2)] md:max-w-[calc(768px+(100%-768px)/2)] lg:ml-[calc((100%-1024px)/2)] lg:max-w-[calc(1024px+(100%-1024px)/2)] xl:ml-[calc((100%-1280px)/2)] xl:max-w-[calc(1280px+(100%-1280px)/2)]"
        >
          {trainings[props.id].modules.map(
            ({ title, description, titleEn, descriptionEn }, index) => (
              <div class="flex min-w-[330px] flex-col gap-y-4 rounded-lg bg-[linear-gradient(225deg,_#000F57_0%,_#001893_100%)] py-4 pl-5 pr-10 md:min-w-[385px]">
                <div class="flex items-center gap-x-2">
                  <span class="block text-3xl font-bold text-[#4d5b9f]">
                    {index + 1}.
                  </span>
                  <h5 class="block">
                    <span class="pt-BR">{title}</span>
                    <span class="en">{titleEn}</span>
                  </h5>
                </div>
                <p class="text-xs text-gray-200">
                  <span class="pt-BR">{description}</span>
                  <span class="en">{descriptionEn}</span>
                </p>
              </div>
            ),
          )}
        </div>
        <img
          class="absolute left-0 top-1/2 z-[1] hidden -translate-y-1/2 xl:block"
          src="/images/training-draw-line-3.png"
          alt="padrão de linhas de fundo"
          width={315}
          height={483}
        />
      </div>
    </>
  );
}
