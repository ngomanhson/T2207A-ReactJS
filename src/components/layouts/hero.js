import { useState, useEffect } from "react";
import api from "../../service/api";
import url from "../../service/url";
import { NavLink } from "react-router-dom";
export default function Hero() {
    const [categories, setCategories] = useState([]);

    const loadCategories = async () => {
        try {
            const rs = await api.get(url.CATEGORY.LIST);

            setCategories(rs.data);
        } catch (err) {}
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const [menuHidden, setMenuhidden] = useState(false);

    const handleToggleMenu = () => {
        const menu = document.getElementById("menu");

        if (!menuHidden) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }

        setMenuhidden(!menuHidden);
    };
    return (
        <section class="hero hero-normal">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="hero__categories">
                            <div class="hero__categories__all" onClick={handleToggleMenu}>
                                <i class="fa fa-bars"></i>
                                <span>All departments</span>
                            </div>
                            <ul id="menu">
                                {categories.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink to={`/category/${item.id}`}>{item.name}</NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="hero__search">
                            <div class="hero__search__form">
                                <form action="#">
                                    <div class="hero__search__categories">
                                        All Categories
                                        <span class="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?" />
                                    <button type="submit" class="site-btn">
                                        SEARCH
                                    </button>
                                </form>
                            </div>
                            <div class="hero__search__phone">
                                <div class="hero__search__phone__icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
