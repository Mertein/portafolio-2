import { useEffect, useState } from "react";
import { Work } from "./work";
import { $isOpenWindow } from "../store/window";
import { useStore } from "@nanostores/react";
interface WindowProps {
  label: string;
}

export const Window = ({ label }: WindowProps) => {
  const [hashUrl, setHashUrl] = useState<string>(window.location.hash);
  const isOpenWindow = useStore($isOpenWindow);
  useEffect(() => {
    const handleHashChange = () => {
      setHashUrl(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange, { passive: true });
  }, []);

  return (
    <>
      {isOpenWindow && (
        <section className="absolute top-20 bottom-0 left-0 right-0 bg-[silver] border-[silver] md:static md:w-[92%] md:h-full   border-2 border-t-white border-l-white border-b-black border-r-black ">
          <div className="flex w-full justify-between items-center px-1 py-1 border-2 border-solid border-[silver] bg-[rgb(1,0,129)] text-white">
            <h1 className="text-xl pl-2 md:text-sm">{label}</h1>
            <div className="flex gap-x-1 mr-1 ">
              <button type="button">
                <img
                  src="/assets/question-icon.png"
                  alt="question"
                  className="h-5 w-5 md:h-4 md:w-4 bg-[silver] border-solid border-2 border-t-white border-l-white border-b-black border-r-black cursor-pointer p-[2px]"
                />
              </button>

              <button type="button" onClick={() => $isOpenWindow.set(false)}>
                <img
                  src="/assets/close-icon.png"
                  alt="close"
                  className="h-5 w-5 md:h-4 md:w-4 bg-[silver] border-solid border-2 border-t-white border-l-white border-b-black border-r-black cursor-pointer p-[2px] "
                />
              </button>
            </div>
          </div>

          <div className="border-2 border-solid shadow-md border-black bg-white m-[1rem] h-[90%] sm:h-[41.5rem] md:h-[36rem] overflow-auto">
            {hashUrl === "" && <Work />}
            {hashUrl === "#works" && <Work />}
            {hashUrl === "#about" && (
              <div className="h-[100%] bg-[#f0f0f0]">
                <h1>About</h1>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
