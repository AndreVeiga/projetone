import { useContext } from "react"

import { Link } from "react-router-dom"
import { AuthContext } from "../../Contexts/Auth/AuthContext"

export const Menu = () => {
  const auth = useContext(AuthContext)

  const handleLogout = async () => {
    await auth.signout()
  }

  return (
      <nav>
      <Link to="/">Home</Link>
      <Link to="/private">Private</Link>
      {<button onClick={handleLogout}>Sair</button>} 
    </nav>
  )
}