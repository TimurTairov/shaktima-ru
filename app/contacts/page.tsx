import Image from 'next/image'
import youtube from '@/public/images/icons/youtube.png'
import tg from '@/public/images/icons/tg.png'
import om from '@/public/images/om_big.png'
import whapsup from '../../public/images/icons/whatsapp.png'
import shop from '@/public/images/icons/shopping-cart.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


const Contacts = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-1 my-4 h-screen bg-white/40">

      <h1 className="text-2xl mb-2">Контакты для связи</h1>

      <div className="flex mb-2">
        <Image src={whapsup} width={25} height={25} className="mr-2" alt="whapsup" />
        <h5 className="dark:text-slate-400 text-gray-700">
          Мадхувидья:
          <a href="whatsapp://send?phone=+79859274240" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-indigo-700 hover:underline ml-2 ">
            написать в WhapsUp
          </a>
        </h5>
      </div>

      <div className="flex">
        <Image src={whapsup} width={25} height={25} className="mr-2" alt="whapsup" />
        <h5 className=" text-gray-700">
          Тиртхадэва:
          <a href="whatsapp://send?phone=+79672067710" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-indigo-700 hover:underline ml-2 ">
            написать в WhapsUp
          </a>
        </h5>
      </div>

      {/* <p className="dark:text-slate-400 text-gray-700">Дэванатха: +79055623388 </p> */}
      <h1 className="text-xl mt-4 mb-2">Наши ресурсы</h1>
      <ul>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
          <Image src={youtube} width={25} height={25} className="mr-2" alt="whapsup" />
          <a href="https://www.youtube.com/@ShaktiMA_MDC" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
            YouTube канал
          </a>
        </li>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
          <Image src={tg} width={25} height={25} className="mr-2" alt="whapsup" />
          <a href="https://t.me/mdc_ShaktiMa" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
            Telegram канал
          </a>
        </li>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
          <Image src={om} width={25} height={25} className="mr-2" alt="whapsup" />
          <a href="https://www.advayta.org/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
            Официальный сайт нашей традиции
          </a>
        </li>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
          <img src="https://institute-vasishtha.com/local/include/template/png/screen-1-img.png" className="w-7 h-7 mr-2" alt="institute-vasishtha.com" />
          <a href="https://institute-vasishtha.com/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
            Институт Риши Васиштхи. Прохождение обучения по курсам.
          </a>
        </li>
        <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
          <FaShoppingCart color='green' className="h-5 w-5 mr-2" />
          <a href="https://www.siddhashop.com/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
            Сиддха шоп. Наш официальный интернет магазин.
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts
