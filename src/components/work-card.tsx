import { useState } from "react";
import { Carousel } from "./carousel";

interface WordCardProps {
  title?: string;
  url?: string[];
  description?: string;
}

export const WorkCard = ({ title, url, description }: WordCardProps) => {
  return (
    <div className="absolute right-0 left-0 top-0 bottom-0 m-auto  border border-solid border-t-white border-r-black border-l-white border-b-black bg-[silver] shadow-sm shadow-[silver] w-[87%] h-[95%]">
      <h1 className="text-xl text-center font-bold">{title}</h1>
      <div className="w-full h-full">
        <div className="flex flex-col">
          <Carousel images={url!} />
        </div>
        <section className="p-6 h-auto  ">
          <div className="flex flex-row border-none">
            <button className="bg-[#d8d8d8] px-2 py-1 cursor-pointer rounded-sm rounded-b-none rounded-r-none">
              Overview
            </button>
            <button className=" bg-[#d8d8d8] px-2 py-1 border-b-0 cursor-pointer rounded-sm rounded-b-none rounded-l-none">
              What I Did
            </button>
          </div>
          <article className=" bg-[#d8d8d8] p-4 text-sm h-auto overflow-y-auto rounded-sm rounded-t-none">
            {description}
          </article>
        </section>
      </div>
    </div>
  );
};
