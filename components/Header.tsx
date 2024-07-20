import Logo from './Logo'
import Nav from './Nav'
import { Open_Sans } from 'next/font/google'
import { Montserrat } from "next/font/google";


const headerFont = Montserrat({ subsets: ['cyrillic'] });

const Header = () => {
  return (
    <header className={`${headerFont.className} top-0 z-[99] lg:px-20 lg:h-16 flex flex-wrap w-full items-center justify-between shadow-md bg-white px-1`} >
      <Logo />
      <Nav />
    </header >
  )
}

export default Header
