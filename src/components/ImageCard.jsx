import React from "react"

const ImageCard = ({ ele, setSelectedImg }) => {
  return (
    <div className="mb-4 break-inside-avoid">

      <img
        src={ele.urls.small}
        alt={ele.alt_description}
        onClick={() => setSelectedImg(ele)}
        className="w-full rounded-xl hover:scale-[1.03] hover:shadow-xl transition duration-300 cursor-pointer"
        loading="lazy"
      />

      <p className="text-xs text-gray-400 mt-1 px-1">
        {ele.user.name}
      </p>
    </div>
  )
}

export default ImageCard