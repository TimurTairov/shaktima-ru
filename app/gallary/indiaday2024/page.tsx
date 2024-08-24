'use client'
import ImageGallery from "react-image-gallery";
import { indiaday__2024, indiaday_deti_2024, indiaday_praktiki_2024, indiaday_shater_2024 } from '../photos24'

const page = () => {
  const settings = {
    showBullets: false,
    showIndex: true,
    slideDuration: 1000,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
  }
  return (
    <div className="max-w-screen-xl mx-auto my-4 bg-white/40">
      <div className="mx-2">
        <h1 className="text-2xl text-center">Дни Индии в Москве с 15 по 18 августа 2024 года.</h1>
        <div className="my-4">
          <h5 className="font-semibold text-lg text-center text-gray-700">Часть 1. Общие фотографии</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={indiaday__2024} {...settings} />
          </div>
        </div>
        <div className="my-4">
          <h5 className="font-semibold text-lg text-center text-gray-700">Часть 2. Наш шатер</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={indiaday_shater_2024} {...settings} />
          </div>
        </div>
        <div className="my-4">
          <h5 className="font-semibold text-lg text-center text-gray-700">Часть 3. Практики</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={indiaday_praktiki_2024} {...settings} />
          </div>
        </div>
        <div className="my-4">
          <h5 className="font-semibold text-lg text-center text-gray-700">Часть 4. Детская Мандала</h5>
          <div className="flex justify-center items-center w-full">
            <ImageGallery items={indiaday_deti_2024} {...settings} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page