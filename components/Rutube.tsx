import dynamic from 'next/dynamic'
interface VideoPlayerTypeProps {
  link: string,
}

const Rutube: React.FC<VideoPlayerTypeProps> = ({ link }) => {
  return (
    <div>
      <iframe width="720" height="405" src={link} frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen></iframe>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Rutube), { ssr: false })
