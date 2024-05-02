interface WindowProps {
  label: string;
}

export const Window = ({ label }: WindowProps) => {
  return (
    <section className="absolute top-0 bottom-0 left-0 right-0 m-auto bg-[silver] border-[silver] h-[31.3rem] w-[36.25rem] md:w-full md:static md:h-[45rem] border-2 border-t-white border-l-white border-b-black border-r-black">
      <div className="flex sticky top-0 w-full f justify-between px-1 py-1 border-2 border-solid border-[silver] bg-[#010081] text-white">
        <h1 className="">{label}</h1>
        <div className="flex gap-x-2">
          <p>?</p>
          <p>X</p>
        </div>
      </div>

      <div className="border-2 border-solid border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#7f7f7f] border-r-[#7f7f7f] bg-white m-[1rem] h-[26rem] md:h-[40rem] overflow-auto">
        Content
      </div>
    </section>
  );
};
