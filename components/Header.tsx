import Logo from './Logo'
import Nav from './Nav'
// import { Open_Sans } from 'next/font/google'
// import { Montserrat } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Manrope } from 'next/font/google'


// const headerFont = Comfortaa({ subsets: ['cyrillic'] });
const headerFont = Manrope({ subsets: ['cyrillic'] });

const Header = () => {
  return (
    <>
      <div className="flex h-6 w-full items-center justify-center rounded bg-gradient-to-tr to-red-700 from-red-800">
        <div className="w-max">
          <h1
            className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 lg:pr-7 text-xs md:text-base  lg:text-xl text-white font-bold">
            {/* Поздравляем сангху с праздником Гуру Пурнима! */}
            Добро пожаловать в пространство чистого видения!
          </h1>
        </div>
      </div>
      <header className={`${headerFont.className} top-0 z-[99] md:px-5 lg:px-20 lg:h-16 flex flex-wrap w-full items-center justify-between shadow-md bg-white px-1`} >
        <Logo />
        <Nav />
      </header >
    </>
  )
}

export default Header
