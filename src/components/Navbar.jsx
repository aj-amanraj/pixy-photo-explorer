import React from "react"
import SearchBar from "./SearchBar"

const Navbar = ({ setSearch }) => {
  return (
    <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 gap-4">

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent ml-10">
          Pixy
        </h1>

        <SearchBar setSearch={setSearch} />

      </div>
    </div>
  )
}

export default Navbar