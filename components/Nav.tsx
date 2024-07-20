"use client"
import { useState } from 'react'
import NavLinks from './NavLinks'
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex md:w-3/4">
        <nav className="hidden w-full justify-end md:flex">
          <NavLinks />
        </nav>
        <div className="md:hidden flex items-center justify-center">
          <button onClick={toggleNavBar}>
            {isOpen ? <FaXmark color={'crimson'} className="block h-10 w-10" /> : <FiMenu color={'crimson'} className="block h-10 w-10" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden flex basis-full flex-col items-start" >
          <NavLinks />
        </nav>
      )}

    </>
  )
}

export default Nav

// const NavLinks = () => {
//   return (
//     <>
//       <Link href='/' className="header-link">Новости</Link>
//       <Link href='/blog' className="header-link">Блог</Link>
//       <Link href='/gallary' className="header-link">Галлерея</Link>
//       <Link href='/aboutus' className="header-link">О нас</Link>
//       <Link href='/contacts' className="header-link">Контакты</Link>
//       <Link href='/donate' className="header-link">Пожертвовать</Link>
//     </>
//   )
// }

