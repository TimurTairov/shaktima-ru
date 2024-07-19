'use client'
import ImageGallery from "react-image-gallery";
import { mshr_2024_1, mshr_2024_2 } from '../photos'

const Mahashivaratriphoto2024 = () => {
  const settings = {
    showBullets: false,
    showIndex: true,
    slideDuration: 1000,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
  }
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <div className="mx-2">
        <h1 className="text-2xl">Фотографии с МахаШиваРатри 2024</h1>
        <div className="mt-10 mb-10">
          <h5 className="dark:text-white font-semibold text-lg text-center text-gray-700 mb-2">Часть 1</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={mshr_2024_1} {...settings} />
          </div>
        </div>
        <div className="mt-10 mb-10">
          <h5 className="dark:text-white font-semibold text-lg text-center text-gray-700 mb-2">Часть 2</h5>
          <div className="flex justify-center items-center">
            <ImageGallery items={mshr_2024_2} {...settings} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mahashivaratriphoto2024
