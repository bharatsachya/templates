"use client"

import { useState } from "react"
import Image from "next/image"

interface ProjectGalleryProps {
  images: { src: string; alt: string }[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-64">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover rounded-lg" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === activeIndex ? "bg-rose-500" : "bg-gray-300"}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

