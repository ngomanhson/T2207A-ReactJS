import { useState } from "react";
export default function Hero() {
    const [item, setSetItem] = useState([
        "Fresh Meat",
        "Vegetable",
        "Fruit & Nut Gifts",
        "Fresh Berries",
        "Ocean Foods",
        "Butter & Eggs",
        "Fastfood",
        "Fresh Onion",
        "Papayaya & Crisps",
        "Oatmeal",
        "Fresh Bananas",
    ]);

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
                                {item.map((item, index) => (
                                    <li key={index}>
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
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
