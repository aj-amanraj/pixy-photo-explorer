import React from "react"
import ImageCard from "./ImageCard"

const ImageGrid = ({ images, setSelectedImg }) => {
  return (
    <div className="p-4 columns-2 sm:columns-3 md:columns-4 gap-4">
      {images.map((ele) => (
        <ImageCard
          key={ele.id}
          ele={ele}
          setSelectedImg={setSelectedImg}
        />
      ))}
    </div>
  )
}

export default ImageGrid