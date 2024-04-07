
import "./index.css";
import Logo123 from './Logo123.png';
import { Link } from "react-router-dom";


function Footer() {
    return (
    <>
     <footer>
        <section>
            <div className="container">
                <div className="even-columns">
                    <div style={{marginTop: "3rem"}}>
                        <nav className="ul-2">
                            <Link to="/" className="logo_2">
                                <img alt="" src={Logo123} width="193px" height="52"></img>
                            </Link>
                            <div className="list1">
                                <li className="style-li">Doormat Navigation</li>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/menu">Menu</Link></li>
                                <li><Link to="/reservations">Reservations</Link></li>
                                <li><Link to="/orderonline">Order Online</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </div>
                            <div className="list2">
                                <li className="style-li">Contact</li>
                                <li>Address</li>
                                <li>Phone Number</li>
                                <li>Email</li>
                            </div>
                            <div className="list3">
                                <li className="style-li">Social Media Links</li>
                                <li>Address</li>
                                <li>Phone Number</li>
                                <li>Email</li>
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