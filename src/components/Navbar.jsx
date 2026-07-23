import { Link } from "react-router-dom";

function NavBar({ props }) {
    return(
        <nav>
            <Link to="/">Home</Link>

            <Link to="/create">Poll</Link>
        </nav>
    )
}

export default NavBar;