import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Context from "../../context/context";

export default function Header() {
    const { state, setState } = useContext(Context);
    const [active, setActive] = useState("");

    const handleClick = (e) => {
        setActive(e);
    };

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header__top__left">
                                <ul>
                                    <li>
                                        <i className="fa fa-envelope"></i> hello@colorlib.com
                                    </li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#!">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#!">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#!">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="#!">
                                        <i className="fa fa-pinterest-p"></i>
                                    </a>
                                </div>
                                <div className="header__top__right__language">
                                    <img src="img/language.png" alt="" />
                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li>
                                            <a href="#!">Spanis</a>
                                        </li>
                                        <li>
                                            <a href="#!">English</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header__top__right__auth">
                                    <Link to="/login">
                                        <i className="fa fa-user"></i> Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="/">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <nav className="header__menu">
                                <ul>
                                    <li className={active === "/" ? "active" : ""}>
                                        <NavLink to="/" onClick={() => handleClick("/")}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className={active === "/shop" ? "active" : ""}>
                                        <NavLink to="/shop" onClick={() => handleClick("/shop")}>
                                            Shop
                                        </NavLink>
                                    </li>
                                    <li className={active === "/blog" ? "active" : ""}>
                                        <NavLink to="/blog" onClick={() => handleClick("/blog")}>
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li className={active === "/contact" ? "active" : ""}>
                                        <NavLink to="/contact" onClick={() => handleClick("/contact")}>
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li className={active === "/about-us" ? "active" : ""}>
                                        <NavLink to="/about-us" onClick={() => handleClick("/about-us")}>
                                            About us
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-heart"></i> <span>{state.favorites.length}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-shopping-bag"></i> <span>{state.cart.length}</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="header__cart__price">
                                item: <span>$150.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    );
}
