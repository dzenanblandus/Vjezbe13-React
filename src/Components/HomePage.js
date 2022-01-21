import "./styles/HomePage.scss"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"

export const HomePage = () => {

    return (
        <div className="background" >
            <Navbar></Navbar>
            <object className="section">
                <h1 className="title">Welcome to <br />our shop</h1>
                <p className="description">Check out why they call us the biggest
                    store on the Internet. Feel
                    free to roam around our shop.</p>
                <Link to='/login'><Button className="btn btn-primary btn-lg home-btn">Login</Button></Link>
                <Link to='/register'><Button className="btn btn-primary btn-lg home-btn">Register</Button></Link>
                <Link to="/products" className="guests"><p className="guest">Continue as guest</p></Link>
            </object>
            <img src={"Shop.svg"} className="illustration" alt=""></img>
        </div>
    )
}