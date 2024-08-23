'use client'
import Image from "next/image"
import Link from "next/link"
import { news } from './news'
import logo from '@/public/images/ShaktiMa-logo.jpg'
import Column from '@/components/Column'
import ImageGallery from "react-image-gallery";
import { home_banner_1 } from './gallary/photos23'

export default function Home() {
  const settings = {
    showBullets: false,
    showIndex: false,
    slideDuration: 2500,
    slideInterval: 5000,
    showFullscreenButton: false,
    showNav: false,
    showPlayButton: false,
    autoPlay: true,
  }

  return (
    <main className="flex min-h-screen px-1 flex-col items-center justify-between">
      <>
        <div className="max-w-screen-xl mx-auto mt-4">
          {/* banners */}
          <section className=" lg:flex justify-between lg:space-x-2">
            <Link href="/" className="w-full lg:w-7/12 h-48 md:h-96 lg:h-96 mb-4 relative rounded-xl inline-block overflow-hidden bg-gradient-to-b from-red-50 to-red-200"
            >
              <div className="absolute left-0 top-0 w-full h-full z-0 bg-gradient-to-b from-black/10 to-black/80"></div>
              <ImageGallery items={home_banner_1} {...settings} />
            </Link>

            <Link href='#' className="w-full lg:w-4/12 h-96 mb-4 bg-gradient-to-b z-0 from-red-50 to-red-200 relative rounded-xl inline-block overflow-hidden">
              {/* <div className="absolute left-0 top-0 w-full h-full z-0 bg-gradient-to-b from-black/10 to-black/50"></div> */}
              <Image className="absolute left-0 top-0 w-full h-full z-1 object-contain lg:object-cover" src={logo} alt="logotip ShaktiMa priority" />
              <div className="p-4 absolute bottom-0 left-0 z-0">{/* <h2 className="text-2xl font-semibold text-gray-100 leading-tight">МДЦ ШактиМа</h2> */}
              </div>
            </Link>
          </section>

          <main className=" lg:flex justify-between lg:space-x-2">
            {/* news  */}
            <div className="lg:px-0 w-full lg:w-7/12">
              <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">Новости Московской сангхи</h5>

              <section className="py-2">
                {news.map((post) => {
                  return <Column key={post.id} img={post.image} title={post.title} txt={post.description} url={post.url} url_info={post.url_info} />
                })}
              </section>
            </div>

            {/* topics */}
            <div className="w-full lg:w-4/12 md:flex md:space-x-6 lg:block lg:space-x-0">
              <div className="w-full mb-4">
                <h5 className=" font-bold text-lg uppercase text-gray-500 mb-2">Популярные статьи</h5>
                <ul>
                  <li className=" px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/blog/eventlist2024" className="flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      Календарь событий 2024
                    </Link>
                  </li>
                  <li className=" px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/blog/indiaday2024" className="flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      День Индии 2024
                    </Link>
                  </li>
                  <li className="px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/blog/mahashivaratri2024" className="flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      МахаШиваРатри 2024
                    </Link>
                  </li>
                  <li className="px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/gallary/mahashivaratriphoto2024" className="flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      Фотографии с МахаШиваРатри 2024
                    </Link>
                  </li>
                  <li className="px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/blog/neoadwayta" className="flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      Как не попасть в ловушку поверхностной Адвайты
                    </Link>
                  </li>
                  <li className="px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/gallary/brahmanandajayantiphoto2024" className="flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      Фотографии со дня явления свами Брахмананды 2024
                    </Link>
                  </li>
                  <li className="px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/gallary/dattajayantiphoto2023" className="flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      Фотографии с Даттаджаянти 2023
                    </Link>
                  </li>
                  <li className="px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/gallary/paambatijayantiphoto2023" className=" flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      Фотографии с Паамбатиджаянти 2023
                    </Link>
                  </li>
                  <li className="px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/gallary/dhanvantarijayantiphoto2023" className=" flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      Фотографии с Дханвантариджаянти 2023
                    </Link>
                  </li>
                  <li className=" px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                    <Link href="/gallary/mahashivaratriphoto2023" className="flex items-center text-sm text-indigo-600 hover:underline">
                      <Image src={logo} alt="logo" width={18} height={18} className="mr-2 rounded" />
                      Фотографии с МахаШиваРатри 2023
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 lg:w-full">
                {/* divider */}
                <div className="border border-dotted border-red-700 dark:border-white md:hidden lg:block"></div>

                {/* subscribe */}
                {/* <div className="my-5 md:my-0 lg:my-5">
                <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">Subscribe</h5>
                <p className="dark:text-slate-400 text-gray-600 mb-4">Subscribe to our newsletter</p>
                <input
                  placeholder="your email address"
                  type="email"
                  className="text-gray-700 bg-gray-100 w-full border rounded hover:border-gray-600 transition-all duration-300"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800 transition-all duration-300">Subscribe</button>
              </div> */}

                {/* divider */}
                {/* <div className="border border-dotted  border-red-700 dark:border-white md:hidden lg:block"></div> */}
              </div>
            </div>
          </main>
        </div>
      </>

    </main>
  );
}
