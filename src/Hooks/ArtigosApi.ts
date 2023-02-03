import { Article } from '../Types/Article'
// import { Api } from './useApi'

export const ApiArtigos = () => ({
    getAll: async (): Promise<Array<Article>> => {
        /*
        const response = await Api.get('/articles')
        return response?.data
        */
        const article = {
            id: "id",
            title: "Atualização Rocket",
            author: "Elton Veiga",
            date: "2023-02-23",
            content: "Conteúdo"
        }

        return [article]
    }
})