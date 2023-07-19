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
        <img
          src="/images/video-thumbnail-facade.png"
          width="1280"
          onClick={() => setShowVideo(true)}
          class="pointer aspect-video max-w-full"
        />
      )}
      {showVideo() && (
        <iframe
          id={`panda-${props.id}`}
          src={`https://player-vz-f53cdb4e-4a5.tv.pandavideo.com/embed/?v=${props.id}&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorTextTop=O VÍDEO COMEÇOU&mutedIndicatorTextBottom=CLIQUE AQUI PARA OUVIR&saveProgress=false&mutedIndicatorClickRestart=true&controls=play-large`}
          style="border:none;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowfullscreen
          width="1280"
          loading="lazy"
          class="aspect-video max-w-full"
        ></iframe>
      )}
    </>
  );
}
