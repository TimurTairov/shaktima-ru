import Image from "next/image"

interface ColumnTypeProps {
  img: string,
  title: string,
  txt: string,
  url: string,
  url_info: string,
}


//! Новости
const Column: React.FC<ColumnTypeProps> = ({ img, title, txt, url, url_info }) => {
  return (
    <div className="block w-full lg:flex lg:flex-col mb-10 rounded-lg border-2 border-white/10 bg-white/50 backdrop-blur-3xl shadow-md shadow-black/70 ">

      <div className="w-full h-[12rem] md:h-[25rem] lg:h-[27rem] lg:w-auto mb-4 opacity-90 relative">
        <Image src={img} alt={title} width={900} height={700} style={{ width: '100%', height: 'auto' }} className="rounded object-cover" />
      </div>

      <div className="flex flex-col w-full px-1 ">
        <h3 className="text-gray-500 font-semibold text-lg lg:text-2xl">{title}</h3>
        <p className=" text-gray-500 mb-1">
          {txt}
          <br />
          <span className=" text-indigo-600 hover:underline">
            {url ? (
              <a href={url} target="_blank" rel="noreferrer">
                {url_info}
              </a>
            ) : (
              ''
            )}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Column
