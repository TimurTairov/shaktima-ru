'use client'
import Link from 'next/link'
import Image from 'next/image'
import VideoPlayer from '@/components/VideoPlayer'
import shiva from '@/public/images/shiva.png'


const MahaShivaRatri2024 = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-4 rounded-lg bg-white/40">
      <div className="mx-2">
        <h3 className="dark:text-white text-gray-700 font-bold text-2xl">Махашиваратри 2024</h3>
        <div className="dark:text-slate-400 text-gray-700 mt-4">
          <p>Махашиваратри в этом году удался на славу Махадэву в прекрасном зале &quot;Энергия Баланса&quot;.</p>
          <p>
            У нас было четыре пуджи, динамическая медитация, танцы, йога, чай, ханг, общение и прасад. На праздник пришло около 50 практикующих, многие из
            которых держали пост. Это было по-настоящему бхавно, весело и интересно. Милость Ануграха Шакти лилась неиссякаемым потоком. Вся ночь пролетела в
            одно мгновение.
          </p>
          <p>Ом Намах Шивая</p>
          <p>Хара Хара Махадева</p>
          <Image src={shiva} width={64} height={64} alt='shiva' className='mt-2' />
        </div>
        <div className="mt-10">
          <h5 className="dark:text-white font-semibold text-lg text-center text-gray-700 lg:ml-2 mb-2">Видео с Махашиваратри</h5>
          <div className='lg:mx-40'>
            <VideoPlayer link='https://youtu.be/6Rb7frU3Org' />
          </div>
        </div>
        <p className="dark:text-slate-400 text-indigo-700 hover:underline mt-10 mb-5">
          <Link href="/gallary/mahashivaratriphoto2024">Фотографии с Махашиваратри 2024</Link>
        </p>
      </div>
    </div>
  )
}

export default MahaShivaRatri2024
