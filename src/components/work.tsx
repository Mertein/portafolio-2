import { projectsWork } from "../../data/projects";
import { ProjectSection } from "./project-section";

interface WorkProps {}
export const Work = ({}: WorkProps) => {
  return (
    <div className="flex flex-row p-0 h-[100%] ">
      {/* Content left side */}
      <section className=" w-[100%] md:w-[40%] p-4 h-[100%]">
        <ProjectSection
          folderImage="/assets/folder-work.png"
          projects={projectsWork}
          label={"Work projects (Recents)"}
        />

        <ProjectSection
          folderImage="/assets/folder-personal.png"
          projects={projectsWork}
          label={"Personal projects"}
        />

        <ProjectSection
          projects={projectsWork}
          label={"Other projects"}
          folderImage="/assets/folder-other.png"
        />
      </section>

      {/* Content rigth side */}
      <section className="hidden relative md:flex flex-col w-[60%] h-[100%] p-0 border-l-2 border-solid border-l-black">
        <div className="h-[40%] bg-gradient-to-b from-emerald-200 to-pink-200 " />
        <div className="relative bg-chessboard h-[60%] bg-cover bg-bottom after:absolute after:inset-0 after:bg-gradient-to-b after:from-pink-200 after:via-transparent after:to-transparent" />

        {/* TODO: Renderizar solo si IsOpen dialog*/}
        <div className="absolute top-0 right-0 left-0 bottom-0 m-auto h-48 w-[25rem] lg:w-[31.25rem] max-w-[31.25rem] border-solid border-2 border-t-white border-l-white border-b-black border-r-black">
          <div className="flex flex-row justify-between bg-[#088080] text-white px-2">
            <h2 className="text-sm">Some navigations Tips</h2>
            <button>
              <img
                src="/assets/close-icon.png"
                alt="close"
                className="h-4 w-4 bg-[silver] border-solid border-2 border-t-white border-l-white border-b-black border-r-black cursor-pointer p-[1px] "
              />
            </button>
          </div>
          <article className="flex flex-col bg-[silver] p-5 h-full gap-y-10 lg:gap-y-16">
            <div className="flex gap-10">
              <img src="assets/book.png" className="w-12 h-12 " />
              <p className="">
                Click a project to see the details here. You can navigate trough
                elements dragging the mouse.
              </p>
            </div>
            <div className="mx-auto my-0 flex gap-5 ">
              <button className="relative w-auto appearance-none border-[2px] border-solid border-b-[#404040] border-r-[#404040] border-t-[#ededed] border-l-[#ededed] bg-[silver] px-2 py-1 leading-[20px] tracking-wider">
                Got it!
                <span className="pointer-events-none absolute inset-[-2px] border-[1px] border-solid border-black"></span>
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
