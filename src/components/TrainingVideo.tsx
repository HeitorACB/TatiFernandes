import 'solid-js';
import { createSignal } from 'solid-js';
export default function TrainingVideo(props: {
  id: string;
  className?: string;
}) {
  const [showVideo, setShowVideo] = createSignal(false);
  return (
    <>
      {!showVideo() && (
        <div
          onClick={() => setShowVideo(true)}
          role="banner"
          class="relative cursor-pointer"
        >
          <img
            onClick={() => setShowVideo(true)}
            src="/images/video-thumbnail-facade.webp"
            alt="Thumbnail do vídeo de apresentação do curso RD Medicine"
            width="1280"
            class="pointer z-[2] aspect-video max-w-full"
          />
          <button
            aria-label="Clique para assistir ao vídeo de apresentação do curso RD Medicine"
            onClick={() => setShowVideo(true)}
            class="absolute left-1/2 top-1/2 z-[3] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0D16A3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 88 88"
              fill="none"
            >
              <g filter="url(#filter0_b_508_42075)">
                <path
                  d="M61.875 41.6944C63.7083 42.7191 63.7083 45.2809 61.875 46.3056L37.125 60.1393C35.2917 61.1641 33 59.8832 33 57.8337L33 30.1663C33 28.1168 35.2917 26.8359 37.125 27.8607L61.875 41.6944Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </div>
      )}
      {showVideo() && (
        <iframe
          id={`panda-${props.id}`}
          src={`https://player-vz-f53cdb4e-4a5.tv.pandavideo.com/embed/?v=${props.id}&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorTextTop=O VÍDEO COMEÇOU&mutedIndicatorTextBottom=CLIQUE AQUI PARA OUVIR&saveProgress=false&mutedIndicatorClickRestart=true&controls=play-large`}
          style="border:none;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowfullscreen
          width="1280"
          class="aspect-video max-w-full"
        ></iframe>
      )}
    </>
  );
}
