import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <div className="bg-white flex-1 h-[70px] flex items-center px-10 gap-6">
     <SearchBar />
      <span className="bg-blue-100 text-sm font-semibold text-blue-600 px-2 py-[6px] rounded-full">
        QJ
      </span>
    </div>
  )
}

export default Header