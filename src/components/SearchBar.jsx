import React from "react"

const SearchBar = ({ setSearch }) => {
  return (
    <div className="flex items-center w-full max-w-md bg-gray-800 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-pink-500">
      <input
        type="text"
        placeholder="Search for ideas"
        className="bg-transparent outline-none w-full text-white"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar