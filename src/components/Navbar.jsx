import React from "react"
import SearchBar from "./SearchBar"

const Navbar = ({ setSearch }) => {
  return (
    <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 gap-4">

        <h1 className="text-3xl sm:text-4xl font-black tracking-wide bg-gradient-to-r from-white/90 via-white to-white/70 bg-clip-text text-transparent font-serif leading-tight">
        Pixy
        </h1>

        <SearchBar setSearch={setSearch} />

      </div>
    </div>
  )
}

export default Navbar