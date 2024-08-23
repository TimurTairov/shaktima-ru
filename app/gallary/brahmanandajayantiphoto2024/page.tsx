'use client'
import { brahmanandaJayanti_2024 } from '../photos24'
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
    <>
      <div className="overflow-hidden bg-gray-100 shadow-sm p-4">
        <div className="marquee-content flex gap-4 items-center animate-marquee">
          <div className="p-1 bg-red-500 text-white text-2xl rounded font-semibold">Ом</div>
          <div className="p-1 bg-orange-500 text-white text-2xl rounded font-semibold">Намо</div>
          <div className="p-1 bg-yellow-500 text-white text-2xl rounded font-semibold">Намах</div>
          <div className="p-1 bg-green-500 text-white rounded text-2xl font-semibold">Шивая</div>
          <div className="p-1 bg-sky-500 text-white rounded text-2xl font-semibold">Ом</div>
          <div className="p-1 bg-blue-500 text-white rounded text-2xl font-semibold">Шива</div>
          <div className="p-1 bg-violet-500 text-white rounded text-2xl font-semibold">Прабхакарая</div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto my-4 bg-white/40 rounded-lg">
        <div className="mx-2">
          <h1 className="text-2xl text-center">Фотографии со дня явления свами Брахмананды 2024</h1>
          <div className="my-4">
            <div className="flex justify-center items-center w-full">
              <ImageGallery items={brahmanandaJayanti_2024} {...settings} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brahmanandajayantiphoto2024