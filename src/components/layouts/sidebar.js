import axios from "axios";
import { useState, useEffect } from "react";
import api from "../../service/api";
import url from "../../service/url";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const [categories, setCategories] = useState([]);

    const loadCategories = async () => {
        try {
            const rs = await api.get(url.CATEGORY.LIST);

            setCategories(rs.data);
        } catch (err) {}
    };

    useEffect(() => {
        // Noi de goi API vao lay data
        // Sau do set data vao trong state
        loadCategories();
    }, []); // Chi chay 1 lan sau khi lam giao dien

    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <h4>Department</h4>
                <ul>
                    {categories.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`/category/${item.id}`}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebar__item">
                <h4>Price</h4>
                <div className="price-range-wrap">
                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="10" data-max="540">
                        <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                        <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                        <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                    </div>
                    <div className="range-slider">
                        <div className="price-input">
                            <input type="text" id="minamount" />
                            <input type="text" id="maxamount" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar__item sidebar__item__color--option">
                <h4>Colors</h4>
                <div className="sidebar__item__color sidebar__item__color--white">
                    <label for="white">
                        White
                        <input type="radio" id="white" />
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--gray">
                    <label for="gray">
                        Gray
                        <input type="radio" id="gray" />
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--red">
                    <label for="red">
                        Red
                        <input type="radio" id="red" />
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--black">
                    <label for="black">
                        Black
                        <input type="radio" id="black" />
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--blue">
                    <label for="blue">
                        Blue
                        <input type="radio" id="blue" />
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--green">
                    <label for="green">
                        Green
                        <input type="radio" id="green" />
                    </label>
                </div>
            </div>
            <div className="sidebar__item">
                <h4>Popular Size</h4>
                <div className="sidebar__item__size">
                    <label for="large">
                        Large
                        <input type="radio" id="large" />
                    </label>
                </div>
                <div className="sidebar__item__size">
                    <label for="medium">
                        Medium
                        <input type="radio" id="medium" />
                    </label>
                </div>
                <div className="sidebar__item__size">
                    <label for="small">
                        Small
                        <input type="radio" id="small" />
                    </label>
                </div>
                <div className="sidebar__item__size">
                    <label for="tiny">
                        Tiny
                        <input type="radio" id="tiny" />
                    </label>
                </div>
            </div>
            <div className="sidebar__item">
                <div className="latest-product__text">
                    <h4>Latest Products</h4>
                    <div className="latest-product__slider owl-carousel">
                        <div className="latest-prdouct__slider__item">
                            <a href="#!" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-1.jpg" alt="" />
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#!" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-2.jpg" alt="" />
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#!" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-3.jpg" alt="" />
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                        <div className="latest-prdouct__slider__item">
                            <a href="#!" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-1.jpg" alt="" />
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#!" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-2.jpg" alt="" />
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#!" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-3.jpg" alt="" />
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
