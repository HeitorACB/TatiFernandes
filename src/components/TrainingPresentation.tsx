import 'solid-js';
import { trainings } from 'data/training';
import CTA from './CTA';
import TrainingVideo from './TrainingVideo';
import { openForm } from 'utils/form';

export default function Training(props: { id: number }) {
  return (
    <div class="container mt-16">
      <div class="mb-10 flex items-center justify-between ">
        <div class="flex max-w-full items-center gap-x-2 md:gap-x-4">
          <div class="flex min-h-[65px] min-w-[65px] items-center justify-center rounded-full bg-white md:min-h-[104px] md:min-w-[104px]">
            <img
              src={`/images/trainings/${trainings[props.id].img}.png`}
              alt={`Foto do treinamento ${trainings[props.id].name.replace(
                /,.*$/,
                '',
              )}`}
              width={91}
              height={91}
              class="max-h-[52px] max-w-[52px] rounded-full md:max-h-[91px] md:max-w-[91px]"
              loading="lazy"
            />
          </div>
          <div class="max-w-[calc(100%-65px-8px)] md:max-w-[calc(100%-80px-16px)]">
            <h3 class="max-w-[730px] break-words font-title text-xl uppercase md:text-3xl">
              {trainings[props.id].name}
            </h3>
          </div>
        </div>
        <CTA
          class="hidden lg:block"
          onClick={() => openForm(trainings[props.id].sheet)}
        >
          <span class="pt-BR">Quero uma aula grátis</span>
          <span class="en">I want a free class</span>
        </CTA>
      </div>
      <TrainingVideo id={trainings[props.id].video} />
      <CTA
        class="mx-auto mt-14 block lg:hidden"
        onClick={() => openForm(trainings[props.id].sheet)}
      >
        <span class="pt-BR">Quero uma aula grátis</span>
        <span class="en">I want a free class</span>
      </CTA>
      <div class="mb-8 mt-[72px]">
        <h3 class="font-title text-[30px] font-semibold uppercase leading-tight tracking-[2.55px]">
          <span class="pt-BR">Coordenador do curso</span>
          <span class="en">Course coordinator</span>
        </h3>
      </div>
      <div class="mb-20 flex flex-col items-center gap-x-8 text-center md:flex-row md:justify-normal md:text-left">
        <img
          src={`/images/specialists/${trainings[props.id].coordImg}.png`}
          alt={`Foto do especialista ${trainings[props.id].coordName.replace(
            /,.*$/,
            '',
          )}`}
          width={280}
          height={296}
          class="mb-4 h-[296px] w-[280px] rounded-full md:mb-0"
        />
        <div class="space-y-2">
          <p class="text-xl uppercase leading-normal">
            {trainings[props.id].coordName}
          </p>
          <p class="max-w-[690px] text-sm text-gray-300">
            <span class="pt-BR">{trainings[props.id].coordDescription}</span>
            <span class="en">{trainings[props.id].coordDescriptionEn}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
