import { projectsWork } from "../../data/projects";
import { ProjectSection } from "./project-section";

interface WindowProps {
  label: string;
}

export const Window = ({ label }: WindowProps) => {
  return (
    <section className="absolute top-24 bottom-0 left-0 right-0 bg-[silver] border-[silver] w-full md:w-full md:static  border-2 border-t-white border-l-white border-b-black border-r-black">
      <div className="flex sticky top-0 w-full f justify-between px-1 py-1 border-2 border-solid border-[silver] bg-[rgb(1,0,129)] text-white">
        <h1 className="">{label}</h1>
        <div className="flex gap-x-2">
          <p>?</p>
          <p>X</p>
        </div>
      </div>

      <div className="border border-solid shadow-md border-black bg-white m-[1rem] h-[90%] sm:h-[41.5rem] md:h-[40rem] overflow-auto">
        {/* TODO: Component Works */}
        <div className="flex flex-row p-0 ">
          {/* <<   Content Left */}
          <section className=" w-[100%] md:w-[50%] p-4">
            <ProjectSection
              folderImage="/assets/folder-work.png"
              projects={projectsWork}
              label={"Work Projects Recent"}
            />

            <ProjectSection
              folderImage="/assets/folder-personal.png"
              projects={projectsWork}
              label={"Personal projects"}
            />

            <ProjectSection
              projects={projectsWork}
              label={"Other Project"}
              folderImage="/assets/folder-other.png"
            />
          </section>

          {/* Content Rigth Side */}
          <section className="hidden relative md:flex flex-col w-[60%] h-screen p-0">
            <div className="absolute top-0 bottom-0 right-0 left-0 h-[20rem] bg-gradient-to-b from-emerald-200 to-pink-200 " />
            <div className="bg-chessboard  h-[80%]  " />
            <p className="absolute top-0 right-0 left-0 bottom-52 m-auto h-48 w-48 bg-red-200"></p>
          </section>
        </div>
      </div>
    </section>
  );
};
