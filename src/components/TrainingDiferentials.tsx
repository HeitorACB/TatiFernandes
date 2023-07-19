import 'solid-js';
import CardIcon from './CardIcon';

import { carouselTrainingsItems } from 'data/carousel';
import { trainings } from 'data/training';

export default function TrainingDifferentials(props: { id: number }) {
  return (
    <div class="container mt-[72px]">
      <h3 class="mb-8 font-title text-[30px] font-semibold uppercase leading-tight tracking-[2.55px]">
        Diferenciais do {carouselTrainingsItems[props.id].title}
      </h3>
      <div class="flex flex-wrap gap-x-12 gap-y-16">
        {trainings[props.id].differentials.map(
          ({ icon, title, titleEn, description, descriptionEn }) => (
            <div class="gap-y- z-[2] flex w-[268px] flex-col">
              <CardIcon type={icon} />
              <h5 class="text-[#FF3158]">
                <span class="pt-BR">{title}</span>
                <span class="en">{titleEn}</span>
              </h5>
              <p class="text-sm text-gray-300">
                <span class="pt-BR">{description}</span>
                <span class="en">{descriptionEn}</span>
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
