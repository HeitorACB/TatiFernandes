export default function TrainingVideo(props: {
  id: string;
  className?: string;
}) {
  return (
    <iframe
      id={`panda-${props.id}`}
      src={`https://player-vz-f53cdb4e-4a5.tv.pandavideo.com/embed/?v=${props.id}`}
      style="border:none;"
      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
      allowfullscreen
      width="1280"
      loading="lazy"
      class="aspect-video max-w-full"
    ></iframe>
  );
}
