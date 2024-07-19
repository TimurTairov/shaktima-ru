import Pudjari from '@/components/Pudjari'
import { pudjari } from './pudjari'
import Link from 'next/link'

function AboutUs() {
  return (
    <div className="max-w-screen-xl mx-auto px-1 mt-4 lg:h-screen">
      <h1 className="text-2xl">Информация о нас</h1>
      <p className="dark:text-slate-400 text-gray-700 mt-4">Ом, намасте. Мы ученики просветленного мастера йоги Свами Вишнудевананда Гири Махараджа. Мы проводим практики в традиции Адвайта сиддхов. Приглашаем Вас на наши мероприятия. Более подробная информация в разделе <Link href='/'>Новости</Link>  </p>
      {pudjari.map((atman) => {
        return <Pudjari key={atman.id} img={atman.foto} name={atman.name} description={atman.description} />
      })}
    </div>
  )
}

export default AboutUs
