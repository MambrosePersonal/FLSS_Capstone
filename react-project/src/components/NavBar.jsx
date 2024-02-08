import { Link } from "react-router-dom"
export function NavBar() {
    return(
        <nav>
            <ul>
                <li><Link to = "/"> Home </Link></li>
                <li><Link to = "/manager"> About </Link></li>
                <li><Link to = "/login"> Login </Link></li>
            </ul>
        </nav>
    )
}
