import { useContext } from "react"

import { Link } from "react-router-dom"
import { AuthContext } from "../../Contexts/Auth/AuthContext"

export const Menu = () => {
  const auth = useContext(AuthContext)

  const handleLogout = async () => {
    await auth.signout()
  }

  return (
    <nav className="container-menu">
      <Link to="/">Home</Link>
      <Link to="/private">Private</Link>
      <Link to="/" onClick={handleLogout}>Sair</Link>
    </nav>
  )
}