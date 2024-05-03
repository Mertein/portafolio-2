interface ProjectItemsProps {
  folderImage: string;
  title: string;
  images: string;
}

export const ProjectItems = ({
  folderImage,
  title,
  images,
}: ProjectItemsProps) => {
  return (
    <div className="flex flex-col w-[7rem] min-w-[7rem] items-center mt-2">
      <div
        className="relative scale-90 hover:scale-110 transition project"
        role="button"
      >
        <img
          src={folderImage}
          width={104}
          height={88}
          alt="folder image"
          draggable={false}
        />
        <img
          className="absolute top-0 left-0 right-0 bottom-0 m-auto"
          src="/assets/contact-w98.png"
          width={30}
          height={30}
          alt="image project"
          draggable={false}
        />
        <img />
      </div>
      <p className="text-sm break-words">{title}</p>
    </div>
  );
};
