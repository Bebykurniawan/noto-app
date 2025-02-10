import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState} from "react";

const Search = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handlerClick = (): void => {
    setOpen((previousOpen) => !previousOpen);
  };

  return (
    <>
      {/* PC VIEW */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-full w-full max-w-[240px] bg-darkBg text-white/50 hover:text-white hover:bg-white/10 hover:shadow-white transition duration-300 border border-white/10" onClick={handlerClick}>
        <MagnifyingGlassIcon className="w-4 h-4" />
        <span className="font-light text-[14px]">Search</span>
      </button>

{ open && (
  <div
  className="fixed inset-0 bg-black/5 backdrop-blur-xs z-50"
  onClick={() => setOpen(false)}
>
      <div className={`fixed left-1/2 -translate-1/2 top-[15vh] bg-darkBg rounded-lg border border-white/10 z-50 max-w-screen-sm w-[50vw]`} onClick={(e) => e.stopPropagation()} >
        <form className=" shadow-md text-white/80 p-4 flex items-center">
          <MagnifyingGlassIcon className="w-4 h-4 mr-[8px]" />
          <input
          autoFocus
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none focus:ring-0 text-base"
          />
        </form>
      </div>
      </div>
)
}
    </>
  );
};

export default Search;
