'use client'
import ImageGallery from "react-image-gallery";
import { dattaJayanti_2023 } from '../photos23'

const Dattajayantiphoto2023 = () => {
  const settings = {
    showBullets: false,
    showIndex: true,
    slideDuration: 1000,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
  }
  return (
    <>
      <div className="overflow-hidden bg-gray-100 shadow-sm p-4">
        <div className="marquee-content flex gap-4 items-center animate-marquee">
          <div className="p-1 bg-yellow-500 text-white text-2xl rounded font-semibold">Ом</div>
          <div className="p-1 bg-yellow-500 text-white text-2xl rounded font-semibold">Драм</div>
          <div className="p-1 bg-yellow-500 text-white text-2xl rounded font-semibold">Даттатреяя</div>
          <div className="p-1 bg-yellow-500 text-white rounded text-2xl font-semibold">Намаха</div>

        </div>
      </div>
      <div className="max-w-screen-xl mx-auto my-4 rounded-lg bg-white/40">
        <div className="mx-2">
          <h1 className="text-2xl text-center">Фотографии с Даттаджаянти 2023</h1>
          <div className="my-4">
            <div className="flex justify-center items-center w-full">
              <ImageGallery items={dattaJayanti_2023} {...settings} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dattajayantiphoto2023