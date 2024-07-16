
import "./index.css";
import Logo123 from './Logo123.png';
import './animations.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        document.body.classList.toggle('noscroll', menuOpen);
      },[menuOpen])
    return (
    <>
    <header className={menuOpen ? "open header" : "header"}>
        <div className={menuOpen ? "fade-in overlay has-fade" : "fade-out overlay has-fade"}></div>
        <div className="container">
            <nav className="nav-1" aria-label="Main" role="navigation">
                <Link to="/"className="logo_2">
                    <img src={Logo123} alt="Little Lemon logo" style={{marginLeft: "-25px"}}></img>
                </Link>
                <ul className="ul-1 hide-for-mobile">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/orderonline">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <Link id="btnHamburger" to="/" className="block-humb" onClick={() => {
                    setMenuOpen(!menuOpen)}} aria-controls="Site Navigation" aria-expanded="false" aria-label="Toggle Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </Link>
            </nav>
            <div className={menuOpen ? "fade-in addit-nav has-fade" : "fade-out addit-nav has-fade"}>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/orderonline">Order Online</Link>
                    <Link to="/login">Login</Link>
            </div>
        </div>
     </header>
    </>
    )
}

export default Header;

