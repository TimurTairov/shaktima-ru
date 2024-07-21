import Link from "next/link"

const NavLinks = () => {
  return (
    <>
      <Link href='/' className="header-link">Новости</Link>
      <Link href='/blog' className="header-link">Блог</Link>
      <Link href='/gallary' className="header-link">Галерея</Link>
      <Link href='/aboutus' className="header-link">О нас</Link>
      <Link href='/contacts' className="header-link">Контакты</Link>
      <Link href='/donate' className="header-link">Пожертвовать</Link>
    </>
  )
}

export default NavLinks