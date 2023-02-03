import { useEffect, useState } from "react"
import { Header } from "../../Components/Header"
import { ApiArtigos } from "../../Hooks"
import { Article } from "../../Types/Article"

export const Home = () => {
    const [articles, setArticles] = useState<Array<Article>>([])

    useEffect(() => {
        const getArticles = async () => {
            const articlesAll = await ApiArtigos().getAll()
            if (articlesAll) {
                setArticles(articlesAll)
            }
        }

        getArticles()
    })

    const viewArticle = (article: Article) => {
        console.log(article.id)
        return (
            <div id={article.id} >
                <article>
                    <h2>{article.title}</h2>
                </article>
            </div>
        )
    }
    

    return (
        <div>
            <Header />
            <main>
                { articles.map(e => viewArticle(e)) }
            </main>
        </div>
    )
} 