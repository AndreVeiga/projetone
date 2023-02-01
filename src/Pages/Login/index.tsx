import { useState, useContext } from "react"
import { AuthContext } from "../../Contexts/Auth/AuthContext"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navegate = useNavigate()
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if (email && password) {
            const is_logged = await auth.signin(email, password)
            if (is_logged) {
                navegate("/")
            } else {
                alert("Não deu certo!")
                setEmail('')
                setPassword('')
            }
        }
    }

    return (
        <div>
            <input
                placeholder="Email"
                type='text'
                onChange={e => setEmail(e.target.value)}
            />

            <input
                placeholder="Senha" 
                type="password"
                onChange={e => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}