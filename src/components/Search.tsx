import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {
  return (
    <>
    {/* PC VIEW */}
    <button className="flex items-center gap-2 px-4 py-2 rounded-full w-full max-w-[240px] bg-darkBg text-white/50 hover:text-white hover:bg-white/10 hover:shadow-white transition duration-300 border border-x-darkBg/100 ">
      <MagnifyingGlassIcon className="w-4 h-4" />
      <span className='font-light text-[14px]'>Search</span>
    </button>
    </>
  )
}

//  opacity-75 text-sm text-white border items-center rounded-full w-full max-w-[240px] p-1.5 gap-2 group
export default Search

