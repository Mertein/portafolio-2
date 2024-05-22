import type { Project } from "../../types";
import { ProjectItems } from "./projec-items";

interface ProjectSectionProps {
  projects: Project[];
  label: string;
  folderImage: string;
  setSelectProject?: (project: Project) => void;
}

export const ProjectSection = ({
  label,
  projects,
  folderImage,
  setSelectProject,
}: ProjectSectionProps) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h2 className="text-lg font-serif font-bold">{label}</h2>
      <div className="flex gap-x-6 cursor-grab ml-3 overflow-x-clip overflow-y-hidden items transition scroll-smooth">
        {projects.map((project) => (
          <ProjectItems
            key={project.id}
            id={project.id}
            url={project.images[0]}
            images={project.images}
            folderImage={folderImage}
            title={project.name}
            setSelectProject={setSelectProject}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};
