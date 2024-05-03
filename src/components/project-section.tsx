import type { Projects } from "../../types";
import { ProjectItems } from "./projec-items";

interface ProjectSectionProps {
  projects: Projects[];
  label: string;
  folderImage: string;
}

export const ProjectSection = ({
  label,
  projects,
  folderImage,
}: ProjectSectionProps) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h2 className="text-sm font-serif font-bold">{label}</h2>
      <div className="flex gap-x-6 cursor-grab ml-3 overflow-x-clip overflow-y-hidden items transition scroll-smooth">
        {projects.map((project) => (
          <ProjectItems
            key={project.id}
            images={project.images[0]}
            folderImage={folderImage}
            title={project.name}
          />
        ))}
      </div>
    </div>
  );
};
