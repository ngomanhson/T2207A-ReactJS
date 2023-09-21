export default function Header() {
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
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-pinterest-p"></i>
                                    </a>
                                </div>
                                <div className="header__top__right__language">
                                    <img src="img/language.png" alt="" />
                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li>
                                            <a href="#">Spanis</a>
                                        </li>
                                        <li>
                                            <a href="#">English</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header__top__right__auth">
                                    <a href="#">
                                        <i className="fa fa-user"></i> Login
                                    </a>
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
                            <a href="./index.html">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li>
                                    <a href="./index.html">Home</a>
                                </li>
                                <li className="active">
                                    <a href="./shop-grid.html">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                    <ul className="header__menu__dropdown">
                                        <li>
                                            <a href="./shop-details.html">Shop Details</a>
                                        </li>
                                        <li>
                                            <a href="./shoping-cart.html">Shoping Cart</a>
                                        </li>
                                        <li>
                                            <a href="./checkout.html">Check Out</a>
                                        </li>
                                        <li>
                                            <a href="./blog-details.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="./blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="./contact.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-heart"></i> <span>1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-shopping-bag"></i> <span>3</span>
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
