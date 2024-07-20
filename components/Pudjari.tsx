import Image from "next/image"

interface PudjariTypeProps {
  img: string,
  name: string,
  description: string,
}

const Pudjari: React.FC<PudjariTypeProps> = ({ img, name, description }) => {
  return (
    <div className="flex items-center h-48 w-auto rounded-lg p-1 my-4 bg-white/40">
      <Image
        src={img}
        width={150}
        height={150}
        alt="img"
        className="ml-4 rounded-[100%]"
      />
      <div className="ml-4">
        <p className="text-gray-700 font-semibold text-lg md:text-xl lg:text-2xl">
          {name}
        </p>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Pudjari
