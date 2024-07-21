// "use client"
import Link from 'next/link'
import Image from 'next/image'

interface ArticalTypeProps {
  img: string,
  tittle: string,
  txt: string,
  url: string,
}

//! блог и галлерея
const Article: React.FC<ArticalTypeProps> = ({ img, tittle, txt, url }) => {
  return (
    <div className="w-full lg:w-96 flex flex-col rounded-lg mb-4 lg:mr-4 bg-white/50 border-2 border-white/10 backdrop-blur-3xl shadow-md shadow-black/70">
      <div className="h-[25rem] md:h-[35rem] lg:h-80 w-full  relative">
        <Image src={img} alt="img" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-lg' />
      </div>

      <div className="flex flex-flow content-between w-full h-1/3 mt-2 py-2 px-1">
        <div>
          <h3 className="  text-red-700 font-semibold mb-2">{tittle}</h3>
          <p className=" text-gray-700 text-sm">{txt}</p>
        </div>

        <div className="w-full ">
          <Link href={url} className='text-slate-800 border rounded border-slate-300 text-center w-full h-8 bg-neutral-100 hover:bg-red-100 hover:text-red-500 hover:no-underline mt-2 flex items-center justify-center '>
            Подробнее
          </Link>
        </div>
      </div>


    </div>
  )
}

export default Article
