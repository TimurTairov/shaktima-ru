import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'

interface VideoPlayerTypeProps {
  link: string,
}

const VideoPlayer: React.FC<VideoPlayerTypeProps> = ({ link }) => {
  return (
    <>
      <ReactPlayer url={link} controls playing width={'auto'} />
    </>
  )
}

export default dynamic(() => Promise.resolve(VideoPlayer), { ssr: false })