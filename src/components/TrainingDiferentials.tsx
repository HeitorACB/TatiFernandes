import 'solid-js';
import CardIcon from './CardIcon';

import { trainings } from 'data/training';

export default function TrainingDifferentials(props: { id: number }) {
  return (
    <div class="container my-12 sm:my-[72px]">
      <h3 class="inline font-title text-xl font-semibold uppercase leading-tight tracking-[2.55px] md:text-[30px]">
        <span class="pt-BR">Diferenciais do</span>
        <span class="en">Differentials of</span> {trainings[props.id].name}
      </h3>
      <div class="mt-8 flex flex-wrap gap-x-12 gap-y-16">
        {trainings[props.id].differentials.map(
          ({ icon, title, titleEn, description, descriptionEn }) => (
            <div class="z-[2] flex w-full flex-col gap-y-4 md:w-[268px]">
              <CardIcon type={icon} />
              <p class="text-[#FF3158]">{title}</p>
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
