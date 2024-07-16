
import "./index.css";
import Logo123 from './Logo123.png';
import { Link } from "react-router-dom";


function Footer() {
    return (
    <>
     <footer role="contentinfo">
        <section>
            <div className="container">
                <div className="even-columns">
                    <div style={{marginTop: "3rem"}}>
                        <nav className="ul-2">
                            <Link to="/">
                                <img className="logo_2" src={Logo123} alt="Little Lemon logo"></img>
                            </Link>
                            <div className="list1">
                                <ul>
                                    <li className="style-li"><Link to="/">Doormat Navigation</Link></li>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/menu">Menu</Link></li>
                                    <li><Link to="/reservations">Reservations</Link></li>
                                    <li><Link to="/orderonline">Order Online</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
                            </div>
                            <div className="list2">
                                <ul>
                                    <li className="style-li"><Link to="/">Contact</Link></li>
                                    <li>Address</li>
                                    <li>Phone Number</li>
                                    <li>Email</li>
                                </ul>
                            </div>
                            <div className="list3">
                                <ul>
                                    <li className="style-li"><Link to="/">Social Media Links</Link></li>
                                    <li>Address</li>
                                    <li>Phone Number</li>
                                    <li>Email</li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    </>
    )
}

export default Footer;