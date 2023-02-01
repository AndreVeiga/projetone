import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../Types/User"
import { useApi } from "../../Hooks/useApi"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [ user, setUser ] = useState<User | null>(null)
    const api = useApi()

    const signin = async (email: string, password: string): Promise<boolean> => {
        const data = await api.signin(email, password)
        if (data?.user) {
            setUser(data.user)
            return true
        }

        return false
    }

    const signout = async () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}