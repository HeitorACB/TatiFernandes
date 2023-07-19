import 'solid-js';
import { trainings } from 'data/training';
import { carouselTrainingsItems } from 'data/carousel';
import CTA from './CTA';
import TrainingVideo from './TrainingVideo';
import TrainingModules from './TrainingModules';

export default function Training(props: { id: number }) {
  return (
    <div class="container mt-16">
      <div class="mb-10 flex items-center justify-between ">
        <div class="flex items-center gap-x-4">
          <div class="flex min-h-[104px] min-w-[104px] items-center justify-center rounded-full bg-white p-[13px]">
            <img
              src={`/images/trainings/${
                carouselTrainingsItems[props.id].img
              }.png`}
              alt={`Foto do treinamento ${carouselTrainingsItems[
                props.id
              ].title.replace(/,.*$/, '')}`}
              width={91}
              height={91}
              class="h-[91px] w-[91px] rounded-full"
              loading="lazy"
            />
          </div>
          <h3 class="font-title text-3xl uppercase">
            {carouselTrainingsItems[props.id].title}
          </h3>
        </div>
        <CTA>Quero uma aula grátis</CTA>
      </div>
      <TrainingVideo id={trainings[props.id].video} />
      <div class="mb-8 mt-[72px]">
        <h3 class="font-title text-[30px] font-semibold uppercase leading-tight tracking-[2.55px]">
          Coordenador do curso
        </h3>
      </div>
      <div class="mb-20 flex items-center gap-x-8">
        <img
          src={`/images/specialists/${trainings[props.id].coordImg}.png`}
          alt={`Foto do especialista ${trainings[props.id].coordName.replace(
            /,.*$/,
            '',
          )}`}
          width={280}
          height={280}
          class="h-[280px] w-[280px] rounded-full"
        />
        <div class="space-y-2">
          <p class="text-xl uppercase leading-normal">
            {trainings[props.id].coordName}
          </p>
          <p class="max-w-[690px] text-sm text-gray-300">
            {trainings[props.id].coordDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
