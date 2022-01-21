import { useNavigate } from "react-router"


export const Navbar = () => {

    const navigtate = useNavigate();

    return (
        <div className="navbar">
            <div onClick={() => { navigtate('/') }} className="navbar-item">home</div>
            <div className="navbar-item">shop</div>
            <div className="navbar-item">about</div>
            <div className="navbar-item">FAQ</div>
        </div>
    )
}