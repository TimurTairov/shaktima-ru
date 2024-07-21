import logo from '../public/images/ShaktiMa-logo.jpg'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/">
      <div className="w-full flex flex-shrink-0 item-center justify-center cursor-pointer gap-1 ">
        <Image src={logo} alt="logo" className="mr-2 rounded h-7 w-7 priority" />
        <span className="text-red-700 md:text-lg lg:text-2xl font-bold flex items-center">МДЦ ШактиМа</span>
      </div>
    </Link>
  )
}

export default Logo