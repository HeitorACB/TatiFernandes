import { carouselTrainingsButtons } from 'data/carousel';
import { trainings } from 'data/training';

export default function CarouselTrainings(props: {
  id: string;
  cardClickFunction: (index: number) => void;
}) {
  return (
    <div class="pl-4 sm:container">
      <div class="flex max-w-full flex-wrap items-center justify-end gap-y-4 sm:flex-nowrap">
        <button
          id={`${props.id}-button-0`}
          class="order-1 mr-4 flex max-h-[56px] min-h-[56px] min-w-[56px] max-w-[56px] items-center justify-center rounded-full sm:mr-8"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d={carouselTrainingsButtons[0].icon}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="sr-only">{carouselTrainingsButtons[0].label}</span>
        </button>
        <div class="order-4 flex-grow overflow-hidden sm:order-2">
          <div class="relative flex max-w-full items-center">
            <div
              id={`${props.id}-fade-left`}
              style="background: linear-gradient(270deg, rgba(26, 33, 69, 0.00) 6.25%, #000830 100%);"
              class="pointer-events-none absolute left-0 top-0 z-[4] hidden h-full w-[100px] sm:block"
            ></div>
            <div id={props.id} class="flex w-full gap-x-8 overflow-x-hidden">
              {trainings.map(
                (
                  { img, name, description, descriptionEn, aspectRatio },
                  index,
                ) => (
                  <button
                    onClick={() => props.cardClickFunction(index)}
                    class="flex min-w-[330px] gap-x-2 rounded-3xl bg-[#12193E] py-4 pl-5 pr-10 md:min-w-[385px]"
                  >
                    <div class="flex h-11 min-w-[44px] max-w-[44px] items-center justify-center rounded-full bg-white p-1">
                      <img
                        src={`/images/trainings/${img}.png`}
                        alt={`Foto do treinamento ${name.replace(/,.*$/, '')}`}
                        width={112}
                        height={Math.round(112 / aspectRatio)}
                        class="rounded-full"
                      />
                    </div>
                    <div>
                      <p class="mb-1 max-w-[232px] font-semibold leading-5">
                        {name}
                      </p>
                      <p class="text-xs leading-5 text-gray-400">
                        <span class="pt-BR">{description}</span>
                        <span class="en">{descriptionEn}</span>
                      </p>
                    </div>
                  </button>
                ),
              )}
            </div>
            <div
              id={`${props.id}-fade-right`}
              style="background: linear-gradient(270deg, #000830 6.25%, rgba(26, 33, 69, 0.00) 100%);"
              class="pointer-events-none absolute right-0 top-0 z-[4] hidden h-full w-[100px] sm:block"
            ></div>
          </div>
        </div>
        <button
          id={`${props.id}-button-1`}
          class="order-2 mr-4 flex max-h-[56px] min-h-[56px] min-w-[56px] max-w-[56px] items-center justify-center rounded-full sm:order-3 sm:ml-8"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d={carouselTrainingsButtons[1].icon}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="sr-only">{carouselTrainingsButtons[1].label}</span>
        </button>
      </div>
    </div>
  );
}
