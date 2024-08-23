'use client'
import ImageGallery from "react-image-gallery";
import { dhanvantariJayanti_2023 } from '../photos23'

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
    <div className="max-w-screen-xl mx-auto my-4 bg-white/40">
      <div className="mx-2">
        <h1 className="text-2xl text-center">Фотографии с Дханвантариджаянти 2023</h1>
        <div className="my-4">
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={dhanvantariJayanti_2023} {...settings} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dattajayantiphoto2023