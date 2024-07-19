interface PudjariTypeProps {
  img: string,
  name: string,
  description: string,
}

const Pudjari: React.FC<PudjariTypeProps> = ({ img, name, description }) => {
  return (
    <div className="flex items-center h-48 w-auto border border-red-300 rounded-lg p-1 my-4">
      <img
        className="h-40 w-40 opacity-90 object-cover ml-4 mr-10 rounded-full"
        src={img}
        alt="img"
      />
      <div>
        <p className="dark:text-white  text-gray-700 font-semibold text-2xl">
          {name}
        </p>
        <p className="dark:text-white  text-gray-700 text-xl">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Pudjari
