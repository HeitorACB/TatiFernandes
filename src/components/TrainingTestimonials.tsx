import 'solid-js';
import { trainings } from 'data/training';
import { carouselTestimonialsButtons } from 'data/carousel';
import { onMount } from 'solid-js';
import carouseInit from 'utils/carousel';

export default function TrainingTestimonials(props: { id: number }) {
  onMount(() => {
    carouseInit({
      carouselItems: trainings[props.id].modules,
      buttonSelectors: carouselTestimonialsButtons.map(
        (_, index) => `#carousel-testimonials-button-${index}`,
      ),
      carouselSelector: '#carousel-testimonials',
      itemSpacing: 0,
    });
  });

  return (
    <div class="relative">
      <div
        id="carousel-testimonials"
        class="container relative z-[2] mt-[72px] flex overflow-hidden rounded-3xl bg-[#12193E] p-7 px-0"
      >
        {trainings[props.id].testimonials.map(
          ({ name, img, description, descriptionEn }) => (
            <div class="flex h-[600px] min-w-full flex-col items-center justify-center text-center">
              <img
                src={`/images/testimonials/${img}.webp`}
                alt={`Foto da testemunha ${name}`}
                width={80}
                height={80}
                class="mb-5 h-[80px] w-[80px] rounded-full"
                loading="lazy"
              />
              <h6 class="mb-2 text-lg font-semibold">{name}</h6>
              <p class="max-w-[900px]">
                <span class="pt-BR">{description}</span>
                <span class="en">{descriptionEn}</span>
              </p>
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
      <img
        class="absolute -top-1/2 right-0 z-[1] hidden xl:block"
        src="/images/training-draw-line-4.png"
        alt="padrão de linhas de fundo"
        width={445}
        height={500}
      />
    </div>
  );
}
