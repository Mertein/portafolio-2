import type { Project } from "../../types";
import { $isOpenDialog } from "../store/window";
interface ProjectItemsProps {
  folderImage: string;
  title: string;
  url: string;
  setSelectProject: (project: Project | null) => void;
  id: string;
  images: string[];
  description: string;
  whatIDid: string;
  link: string;
  github: string | null;
}

export const ProjectItems = ({
  folderImage,
  title,
  setSelectProject,
  id,
  images,
  url,
  description,
  link,
  whatIDid,
  github,
}: ProjectItemsProps) => {
  const onClick = () => {
    setSelectProject({
      id,
      name: title,
      images,
      description,
      whatIDid,
      link,
      github,
    });
    $isOpenDialog.set(false);
  };

  return (
    <div className="flex flex-col w-[7rem] min-w-[7rem] items-center mt-2">
      <div
        className="relative scale-90 hover:scale-110 transition-all ease-out cursor-grabbing"
        role="button"
        onClick={onClick}
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
          src={url}
          width={30}
          height={30}
          alt="image project"
          draggable={false}
        />
        <img />
      </div>
      <p className="break-words text-center w-fit text-xs">{title}</p>
    </div>
  );
};
