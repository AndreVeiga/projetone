import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/private">Private</Link>
      </nav>

    )
}