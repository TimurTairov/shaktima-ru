import Article from '@/components/Article'
import { allGallaries } from './index'

const Gallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 px-1 h-min-['100vh']">
      <h1 className="text-2xl mb-4">Галлерея</h1>
      <div className="flex flex-row flex-wrap justify-center lg:justify-start">
        {allGallaries.map((article) => {
          return <Article key={article.id} img={article.img} tittle={article.tittle} txt={article.description} url={article.url} />
        })}
      </div>
    </div>
  )
}

export default Gallery