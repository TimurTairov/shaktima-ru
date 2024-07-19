'use client'
import ImageGallery from "react-image-gallery";
import { dattaJayanti_2023 } from '../photos'

const Dattajayantiphoto2023 = () => {
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
        <h1 className="text-2xl ml-2">Фотографии с Даттаджаянти 2023</h1>
        <div className="mt-10 mb-10">
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={dattaJayanti_2023} {...settings} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dattajayantiphoto2023