import { BiSolidDonateHeart } from "react-icons/bi";
import { Metadata } from 'next'
import Image from "next/image";
import om64 from '@/public/images/om-64.png'

export const metadata: Metadata = {
  title: 'Пожертвование',
  description: 'Пожертвование на развитие Дхармы'
}

const Donate = () => {

  return (
    <div className="max-w-screen-xl mx-2 lg:mx-auto my-4 h-screen rounded-lg bg-white/50">

      <h1 className="text-2xl mx-2 my-4">Пожертвовать на развитие Дхарма центра</h1>
      <div className="mx-2">
        <div className="flex items-center text-xl my-2 text-indigo-600">
          <h1 className="mr-2 font-semibold">Ю-Money</h1>
          <BiSolidDonateHeart />
        </div>

        <iframe
          title="108r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=aejT5wRP1vY.230410&"
          width="330"
          height="50"
          frameBorder="0"
          // allowTransparency={true}
          scrolling="no"
        />
        <iframe
          title="540r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=y4lXeQOxU8o.230415&"
          width="330"
          height="50"
          frameBorder="0"
          // allowTransparency={true}
          scrolling="no"
        />

        <iframe
          title="1080r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=SGusHwIOHgo.230412&"
          width="330"
          height="50"
          frameBorder="0"
          // allowTransparency={true}
          scrolling="no"
        />
      </div>
      <Image src={om64} alt='om' className='h-52 w-52 sm:h-72 sm:w-72 lg:h-96 lg:w-96 mx-auto mt-10 opacity-20' />
    </div>
  )
}

export default Donate
