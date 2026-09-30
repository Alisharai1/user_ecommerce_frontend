import { NavLink ,Outlet} from "react-router"

export const App = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home Page</NavLink>
                <NavLink to="/login"> Login Page</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}