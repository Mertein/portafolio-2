import { useState } from "react";

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [loeaded, setLoaded] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [index, setIndex] = useState<number>(0);

  const prev = () => {
    setLoaded(false);
    if (index === 0) return;
    setIndex(index - 1);
    setSelectedImage(images[index]);
  };

  const next = () => {
    setLoaded(false);
    if (index === images.length - 1) return;
    setIndex(index + 1);
    setSelectedImage(images[index]);
  };

  return (
    <div className="relative mx-auto flex flex-col items-center mt-4">
      <img
        src={selectedImage}
        alt="Work"
        onLoad={() => setLoaded(true)}
        className="w-full max-w-[500px] h-auto object-cover m-auto aspect-video "
      />
      <div className="absolute bottom-2 right-2 flex gap-2 max-sm:hidden">
        <img
          role="button"
          src="/assets/arrow-key.png"
          height={50}
          width={27}
          onClick={prev}
        />
        <img
          role="button"
          src="/assets/arrow-key.png"
          height={50}
          width={27}
          className="rotate-180"
          onClick={next}
        />
      </div>
    </div>
  );
};
