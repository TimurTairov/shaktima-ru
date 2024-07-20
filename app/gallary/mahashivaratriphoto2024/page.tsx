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
    <div className="max-w-screen-xl mx-auto my-4 rounded-lg bg-white/40">
      <div className="mx-2">
        <h1 className="text-2xl text-center">Фотографии с МахаШиваРатри 2024</h1>
        <div className="my-4">
          <h5 className="dark:text-white font-semibold text-lg text-center text-gray-700">Часть 1</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={mshr_2024_1} {...settings} />
          </div>
        </div>
        <div className="my-4 ">
          <h5 className="dark:text-white font-semibold text-lg text-center text-gray-700">Часть 2</h5>
          <div className="flex justify-center items-center">
            <ImageGallery items={mshr_2024_2} {...settings} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mahashivaratriphoto2024
