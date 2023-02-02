import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../Types/User"
import { useApi } from "../../Hooks/useApi"
import { AuthConfig } from "../../Enums/Config"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [ user, setUser ] = useState<User | null>(null)
    const api = useApi()

    useEffect(() => { 
        const validateToken = async () => {
            const token = await localStorage.getItem(AuthConfig.TOKEN)
            if (token) {
                const data = await api.validateToken(token)
                const { user } = data
                if (user) {
                    setUser(user)
                }
            }
        }
        
        validateToken()
    }, [])

    

    const signin = async (email: string, password: string): Promise<boolean> => {
        const data = await api.signin(email, password)
        const { user } = data
        if (user) {
            await setUser(user)
            await setToken(user.token)
            return true
        }

        return false
    }

    const signout = async () => {
        await setUser(null)
        await setToken('')
    }

    const setToken = async (token: string) => {
        await localStorage.setItem(AuthConfig.TOKEN, token)
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}