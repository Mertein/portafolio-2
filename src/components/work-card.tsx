interface WordCardProps {
  title?: string;
  url?: string[];
  description?: string;
}

export const WorkCard = ({ title, url, description }: WordCardProps) => {
  return (
    <div className="absolute right-0 left-0 top-0 bottom-0 m-auto  border border-solid border-t-white border-r-black border-l-white border-b-black bg-[silver] shadow-sm shadow-[silver]">
      <h1 className="text-xl text-center font-bold">{title}</h1>
      <div className="flex flex-col">
        {/* {url?.map((url) => ( */}
        <img
          // key={url}
          src={url![0]}
          alt="Work"
          width={300}
          height={200}
          className="mx-auto border border-solid border-t-white border-r-black border-l-white border-b-black"
        />
        {/* ))} */}

        <div className="flex">
          <img
            src="/assets/arrow-key.png"
            height={50}
            width={27}
            className="m-auto"
          />
          <img
            src="/assets/arrow-key.png"
            height={50}
            width={27}
            className="rotate-180 m-auto"
          />
        </div>
      </div>

      <section className="p-6 overflow-scroll max-h-48 ">
        <div className="flex flex-row border-none">
          <button className="border border-solid border-b-0 px-2 py-1 cursor-pointer">
            Work
          </button>
          <button className="border border-solid px-2 py-1 border-b-0 cursor-pointer">
            What I Do
          </button>
        </div>
        <article className="border border-solid p-4 text-sm h-32 overflow-y-auto">
          {description}
        </article>
      </section>
      <button className="m-auto flex px-2 py-1 bg-white border border-t-white border-b-black border-l-white border-r-black">
        Close
      </button>
    </div>
  );
};
