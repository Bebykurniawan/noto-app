import Search from "./Search"
const Header = () => {
  return (
    <div className="p-10 flex justify-between items-center">
      <h1 className="text-3xl font-medium text-white">📋Noto</h1>
      <Search/>
    </div>
  )
}

export default Header
