import React from "react"

const Modal = ({ selectedImg, setSelectedImg }) => {
  if (!selectedImg) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setSelectedImg(null)}
    >
      <div
        className="relative max-w-4xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedImg(null)}
          className="absolute top-2 right-2 text-white text-2xl"
        >
          ✕
        </button>

        <img
          src={selectedImg.urls.regular}
          alt={selectedImg.alt_description}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />

        <p className="text-center text-gray-300 mt-2">
          {selectedImg.user.name}
        </p>
      </div>
    </div>
  )
}
export default Modal