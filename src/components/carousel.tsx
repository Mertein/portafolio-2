import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  autoPlay: boolean;
}

export const Carousel = ({ images, autoPlay }: CarouselProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [index, setIndex] = useState<number>(0);

  const selectNewImage = (index: number, images: string[], next = true) => {
    const condition = next ? index < images.length - 1 : index > 0;
    const nextIndex = next
      ? condition
        ? index + 1
        : 0
      : condition
      ? index - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setIndex(nextIndex);
  };

  const next = () => {
    selectNewImage(index, images);
  };

  const prev = () => {
    selectNewImage(index, images, false);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(index, images);
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="relative mx-auto flex flex-col items-center mt-4">
      <img
        src={selectedImage}
        alt="Work"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full max-w-[500px] h-auto bg-cover bg-center m-auto aspect-video transition-all ease-in duration-1000
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />
      <div className="absolute bottom-2 right-2 flex gap-2 max-sm:hidden ">
        <button
          onClick={prev}
          className="hover:scale-105 disabled:opacity-50"
          disabled={images.length === 1}
        >
          <img
            role="button"
            src="/assets/arrow-key.png"
            height={50}
            width={27}
            className="hover:scale-110"
          />
        </button>
        <button
          onClick={next}
          className="hover:scale-110 disabled:opacity-50 "
          disabled={images.length === 1}
        >
          <img
            src="/assets/arrow-key.png"
            height={50}
            width={27}
            className="rotate-180"
          />
        </button>
      </div>
    </div>
  );
};
