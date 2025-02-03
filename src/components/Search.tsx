import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {
  return (
    <>
    {/* PC VIEW */}
    <button className="flex items-center gap-2 px-4 py-2 rounded-full w-full max-w-[240px] hover:bg-gray-700 transition bg-darkBg text-grayText border">
      <MagnifyingGlassIcon className="w-5 h-5 text-white" />
      <span className='font-light'>Search</span>
    </button>
    </>
  )
}

//  opacity-75 text-sm text-white border items-center rounded-full w-full max-w-[240px] p-1.5 gap-2 group
export default Search
