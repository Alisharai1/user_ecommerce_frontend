import { NavLink } from "react-router"

export const PageNotFound = () => {
    return (
        <div>
            <h2> This is not the correct page .</h2>
            <NavLink to="/"> Go to Home Page</NavLink>
        </div>
    )
}