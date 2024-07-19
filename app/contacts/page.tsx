import Image from 'next/image'
import youtube from '@/public/images/icons/youtube.png'
import tg from '@/public/images/icons/tg.png'
import om from '@/public/images/om_big.png'
import whapsup from '../../public/images/gif/whatsapp.gif'
import shop from '@/public/images/icons/shopping-cart.png'


const Contacts = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-1 mt-4 h-screen ">

      <h1 className="text-2xl mb-2">Контакты для связи</h1>

      <div className="flex">
        <Image src={whapsup} width={25} height={25} className="mr-2" alt="whapsup" />
        <h5 className="dark:text-slate-400 text-gray-700">
          Мадхувидья:
          <a href="whatsapp://send?phone=+79859274240" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-indigo-700 hover:underline ml-2">
            +79859274240
          </a>
        </h5>
      </div>

      <div className="flex">
        <Image src={whapsup} width={25} height={25} className="mr-2" alt="whapsup" />
        <h5 className="dark:text-slate-400 text-gray-700">
          Тиртхадэва:
          <a href="whatsapp://send?phone=+79672067710" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-indigo-700 hover:underline ml-2">
            +79672067710
          </a>
        </h5>
      </div>

      {/* <p className="dark:text-slate-400 text-gray-700">Дэванатха: +79055623388 </p> */}
      <h1 className="text-xl mt-4 mb-2">Наши ресурсы</h1>
      <ul>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2">
          <a href="https://www.youtube.com/@ShaktiMA_MDC" className="flex" target="_blank" rel="noreferrer">
            <Image src={youtube} width={25} height={25} className="mr-2" alt="whapsup" />
            YouTube канал
          </a>
        </li>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2">
          <a href="https://t.me/mdc_ShaktiMa" className="flex" target="_blank" rel="noreferrer">
            <Image src={tg} width={25} height={25} className="mr-2" alt="whapsup" />
            Telegram канал
          </a>
        </li>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2">
          <a href="https://www.advayta.org/" className="flex" target="_blank" rel="noreferrer">
            <Image src={om} width={25} height={25} className="mr-2" alt="whapsup" />
            Официальный сайт нашей традиции
          </a>
        </li>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2">
          <a href="https://institute-vasishtha.com/" className="flex" target="_blank" rel="noreferrer">
            {/* <Image src='https://institute-vasishtha.com/local/include/template/png/screen-1-img.png' width={25} height={25} className="mr-2" alt="whapsup" /> */}
            <img src="https://institute-vasishtha.com/local/include/template/png/screen-1-img.png" className="w-7 h-7 mr-2" alt="institute-vasishtha.com" />
            Институт Риши Васиштхи. Прохождение обучения по курсам.
          </a>
        </li>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2">
          <a href="https://www.siddhashop.com/" className="flex" target="_blank" rel="noreferrer">
            <Image src={shop} width={25} height={20} className="mr-2" alt="shop" />
            Сиддха шоп. Наш официальный интернет магазин.
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts
