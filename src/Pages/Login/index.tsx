import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../Contexts/Auth/AuthContext"

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
        <div className="container-login">
            <div>
                <input
                    placeholder="email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <input
                    onChange={e => setPassword(e.target.value)}
                    placeholder="senha"
                    required
                    type='password'/>
            </div>       
            <div>
                <button
                    className="button-login"
                    onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}