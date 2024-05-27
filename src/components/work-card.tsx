import { useRef, useState } from "react";
import { Carousel } from "./carousel";
import type { Project } from "../../types";
import Draggable from "react-draggable";

interface WordCardProps {
  title: string;
  id: string;
  url: string[];
  description: string;
  whatIDid: string;
  setSelectProject: (project: Project | null) => void;
  link: string;
  github: string | null;
}

export const WorkCard = ({
  title,
  url,
  description,
  setSelectProject,
  whatIDid,
  id,
  link,
  github,
}: WordCardProps) => {
  const [infoToggle, setToggleInfo] = useState<number>(0);
  const draggRef = useRef(null);
  return (
    <Draggable nodeRef={draggRef}>
      <div
        ref={draggRef}
        className="absolute right-0 left-0 top-0 bottom-0 m-auto  border border-solid border-t-white border-r-black border-l-white border-b-black bg-[silver] shadow-sm shadow-[silver] w-[87%] h-[95%]"
      >
        <div className="h-6 bg-[#088080] flex items-center px-1 w-full">
          <p className="text-sm">{title}</p>
          <div className="flex gap-x-1 ml-auto">
            <img
              role="button"
              src="/assets/maximize-icon.png"
              className="h-5 w-5 md:h-4 md:w-4 bg-[silver] border-solid border-2 border-t-white border-l-white border-b-black border-r-black cursor-pointer p-[2px]"
            />

            <img
              src="/assets/close-icon.png"
              role="button"
              onClick={() => setSelectProject(null)}
              className="h-5 w-5 md:h-4 md:w-4 bg-[silver] border-solid border-2 border-t-white border-l-white border-b-black border-r-black cursor-pointer p-[2px]"
            />
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col">
            <Carousel images={url!} autoPlay />
          </div>
          <section className="p-6 h-auto ">
            <div className="flex flex-row border-none">
              <button
                onClick={() => setToggleInfo(0)}
                className={`bg-[silver]] px-2 py-1 cursor-pointer rounded-sm rounded-b-none rounded-r-none ${
                  infoToggle === 0
                    ? "bg-[#d8d8d8] font-semibold"
                    : "bg-[silver]"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setToggleInfo(1)}
                className={`bg-[silver]] px-2 py-1 cursor-pointer rounded-sm rounded-b-none rounded-l-none ${
                  infoToggle === 1
                    ? "bg-[#d8d8d8] font-semibold"
                    : "bg-[silver]"
                }`}
              >
                What I Did
              </button>
            </div>
            <article className=" bg-[#d8d8d8] p-4 text-sm h-auto overflow-y-auto rounded-sm rounded-t-none">
              {infoToggle === 0 ? <>{description}</> : <>{whatIDid}</>}
            </article>
          </section>
          <div className="mx-auto my-0 flex items-end md:h-[7rem] lg:h-[3.5rem]  justify-center">
            <button className="relative w-auto appearance-none border-[2px] border-solid border-b-[#404040] border-r-[#404040] border-t-[#ededed] border-l-[#ededed] bg-[silver] px-2 py-1 leading-[20px] tracking-wider hover:scale-105 transition ease-out ">
              <a href={link ? link : github!}>
                {link ? "Visit Site" : "Github Repository"}
              </a>
              <span className="pointer-events-none absolute inset-[-2px] border-[1px] border-solid border-black"></span>
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};
