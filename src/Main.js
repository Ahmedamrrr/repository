import "./index.css";
import restauranfood from './restauranfood.jpg';
import icondel from './icondel.png';
import greeksalad from './greeksalad.jpg';
import bruchetta from './bruchetta.png';
import lemondessert from './lemon dessert.jpg';
import { Link } from "react-router-dom";

function Main() {
    return (
    <>
    <main>
        <section className="background-hero">
            <div className="container">
                <div className="even-columns">
                    <div className="hero_text">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to="/reservations"><button type="button" className="button-1">Reserve a Table</button></Link>
                    </div>
                    <div>
                        <img alt="" src={restauranfood} className="image_hero"></img>
                    </div>
                </div>
            </div>
        </section>
        <section style={{paddingTop: "154px", marginBottom: "-40px"}}>
            <div className="container">
                <div className="even-columns">
                    <div className="sec-head">
                        <h1 className="sec-heading">This weeks specials!</h1>
                    </div>
                    <div className="button-dis">
                       <Link to="/menu"><button type="button" className="button-1" style={{padding: "1rem 2rem",
                        marginLeft: "250px",
                        marginTop: "16px"}}>Online Menu</button></Link>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="even-columns" style={{fontFamily: "karla"}}>
                    <div className="card">
                        <div className="card-image">
                        <img  alt="" src={greeksalad} height="239" width="286" style={{borderTopRightRadius: "16px", borderTopLeftRadius: "16px", overflow: "hidden"}}></img>
                        </div>
                        <div className="card-text">
                            <div className="card-title"><p>Greek salad</p></div><div className="card-price"><p>$12.99</p></div>
                            <div className="card-description"><p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago
                                style feta cheese garnished with crunchy garlic and rosemary croutons.</p></div>
                            <div className="card-cta"><Link to="/orderonline">Order a delivery<img alt="" src={icondel} height="27" width="27" style={{paddingLeft: "160px", marginTop: "-26px", marginBottom: "18px"}}></img></Link></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img alt="" src={bruchetta} height="239" width="286" style={{borderTopRightRadius: "16px", borderTopLeftRadius: "16px", overflow: "hidden"}}></img>
                        </div>
                        <div className="card-text">
                            <div className="card-title"><p>Bruchetta</p></div><div className="card-price"><p>$5.99</p></div>
                            <div className="card-description"><p>Our Bruschetta is made from grilled bread that has been smeared with
                                garlic and seasoned with salt and olive oil.</p></div>
                            <div className="card-cta" style={{marginTop: "100px"}}><Link to="/orderonline">Order a delivery<img alt="" src={icondel} height="27" width="27" style={{paddingLeft: "160px", marginTop: "-26px", marginBottom: "18px"}}></img></Link></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                        <img alt="" src={lemondessert} height="239" width="286" style={{borderTopRightRadius: "16px", borderTopLeftRadius: "16px", overflow: "hidden"}}></img>
                        </div>
                        <div className="card-text">
                        <div className="card-title"><p>Lemon Dessert</p></div><div className="card-price"><p>$5.00</p></div>
                        <div className="card-description"><p>This comes straight from grandma's recipe book,
                            every last ingredient has been sourced and is as authentic as can be imagined.</p></div>
                        <div className="card-cta"><Link to="orderonline">Order a delivery<img alt="" src={icondel} height="27" width="27" style={{paddingLeft: "160px", marginTop: "-26px", marginBottom: "18px"}}></img></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
    )
}

export default Main;