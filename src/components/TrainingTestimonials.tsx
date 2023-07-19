import 'solid-js';
import { trainings } from 'data/training';
import { carouselTestimonialsButtons } from 'data/carousel';
import { onMount } from 'solid-js';
import initCarousel from 'utils/carousel';

export default function TrainingTestimonials(props: { id: number }) {
  onMount(() => {
    initCarousel({
      buttonSelectors: carouselTestimonialsButtons.map(
        (_, index) => `#carousel-testimonials-button-${index}`,
      ),
      carouselSelector: '#carousel-testimonials',
    });
  });

  return (
    <div class="relative">
      <div class="container">
        <h3 class="mb-7 font-title text-[30px] font-semibold uppercase leading-tight tracking-[2.55px]">
          <span class="pt-BR">Depoimentos</span>
          <span class="en">Depositions</span>
        </h3>
        <div
          id="carousel-testimonials"
          class="relative z-[2] flex overflow-hidden rounded-3xl bg-[#12193E] p-7 px-0"
        >
          {trainings[props.id].testimonials.map(
            ({ name, img, description, descriptionEn }) => (
              <div class="flex min-h-[600px] min-w-full flex-col items-center justify-center text-center">
                <img
                  src={`/images/testimonials/${img}.webp`}
                  alt={`Foto da testemunha ${name}`}
                  width={80}
                  height={80}
                  class="mb-5 h-[80px] w-[80px] rounded-full"
                  loading="lazy"
                />
                <p class="mb-2 text-lg font-semibold">{name}</p>
                <p class="max-w-[315px] sm:max-w-[450px] md:max-w-[590px] lg:max-w-[900px]">
                  <span class="pt-BR">{description}</span>
                  <span class="en">{descriptionEn}</span>
                </p>
                <div class="h-24 w-14"></div>
              </div>
            ),
          )}
        </div>
        <div class="absolute bottom-10 left-1/2 z-[2] flex -translate-x-1/2 gap-x-8">
          {carouselTestimonialsButtons.map(({ label, icon }, index) => (
            <button
              id={`carousel-testimonials-button-${index}`}
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
      <img
        class="absolute -top-1/2 right-0 z-[1] hidden xl:block"
        src="/images/training-draw-line-4.png"
        alt="padrão de linhas de fundo"
        width={365}
        height={500}
      />
    </div>
  );
}
