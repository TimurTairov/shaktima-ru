import Article from '../../components/Article'
import { allArticles } from './index'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог',
  description: 'Здесь размещены статьи об Адвайте и йоге'
}


const Blog = () => {
  return (
    <div className="max-w-screen-xl px-1 mx-auto my-4 rounded-lg lg:h-screen">
      <h1 className="text-2xl mb-4">Блог</h1>
      <div className="flex flex-row flex-wrap justify-center lg:justify-start">
        {allArticles.map((article) => {
          return <Article key={article.id} img={article.img} tittle={article.title} txt={article.description} url={article.url} />
        })}
      </div>
    </div>
  )
}

export default Blog