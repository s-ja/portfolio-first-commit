"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectImageSwiperProps {
  images: string[]
  projectName: string
}

export function ProjectImageSwiper({ images, projectName }: ProjectImageSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (images.length === 0) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
        <div className="flex h-full items-center justify-center">
          <span className="text-muted-foreground">프로젝트 이미지</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
      <Image
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${projectName} 스크린샷 ${currentIndex + 1}`}
        fill
        className="object-cover transition-all duration-300"
      />

      {images.length > 1 && (
        <>
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 h-8 w-8 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary" : "bg-primary/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
