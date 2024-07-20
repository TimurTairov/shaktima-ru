'use client'
import { brahmanandaJayanti_2024 } from '../photos'
import ImageGallery from "react-image-gallery";


const Brahmanandajayantiphoto2024 = () => {
  const settings = {
    showBullets: true,
    showIndex: true,
    slideDuration: 1000,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
  }

  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <div className="mx-2">
        <h1 className="text-2xl ml-2">Фотографии со дня явления свами Брахмананды 2024</h1>
        <div className="mt-10 mb-10">
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={brahmanandaJayanti_2024} {...settings} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brahmanandajayantiphoto2024