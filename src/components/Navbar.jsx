import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <h1>Polling App</h1>

            <Link to="/">Home</Link>
            
            <Link to="/create">Poll</Link>
        </nav>
    )
}

export default NavBar;