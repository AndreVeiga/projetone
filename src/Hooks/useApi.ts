import axios from 'axios'

export const Api = axios.create({
    baseURL: process.env.BASE_AUTH_API
})

export const useApi = () => ({
    signin: async (email: string, password: string) => {
        /*
        const response = await Api.post('/signin', { email, password })
        return response?.data
        */

        return {
            user: {
                id: '3', name: 'Elton Veiga', email: 'elton.veiga@gmail.com', password: '0123456789', token: 'token'
            }
        }
    },
    validateToken:async (token: string) => {
        return {
            user: {
                id: '3', name: 'Elton Veiga', email: 'elton.veiga@gmail.com', password: '0123456789', token: 'token'
            }
        }
    }
})