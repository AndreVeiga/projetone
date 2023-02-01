import axios from 'axios'

const Api = axios.create({
    baseURL: process.env.BASE_AUTH_API
})

export const useApi = () => ({
    signin: async (email: string, password: string) => {
        const response = await axios.post('/signin', { email, password })
        return response?.data
    }
})