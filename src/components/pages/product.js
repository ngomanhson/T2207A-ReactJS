import { useContext, useEffect, useState } from "react";
import api from "../../service/api";
import url from "../../service/url";
import { useParams } from "react-router-dom";
import { default as ProductGrid } from "../views/product";
import Context from "../../context/context";

function Product() {
    const { id } = useParams();
    const { state, setState } = useContext(Context); // Connect global state
    const [product, setProduct] = useState({
        category: {},
        buy_qty: 1,
    });

    const [relateds, setRelateds] = useState([]);
    const loadProduct = async () => {
        try {
            const rs = await api.get(url.PRODUCT.DETAIL + `?id=${id}`);
            setProduct(rs.data);
        } catch (error) {}
    };

    const loadRelateds = async () => {
        try {
            const rs = await api.get(url.PRODUCT.RELATED + `?id=${id}`);
            setRelateds(rs.data);
        } catch (error) {}
    };

    useEffect(() => {
        loadProduct();
        loadRelateds();
    }, [id]);

    const changeQty = (e) => {
        const v = e.target.value;
        setProduct({ ...product, buy_qty: v });
    };

    const addToCart = () => {
        const cart = state.cart;
        cart.push(product);
        setState({ ...state, cart: cart, loading: true });
        //x =  [] => [...x,5];
        setTimeout(() => {
            setState({ ...state, loading: false });
        }, 800);
    };

    const addFavorites = () => {
        const favorites = state.favorites;
        favorites.push(product);

        setState({ ...state, favorites: favorites, loading: true });

        setTimeout(() => {
            setState({ ...state, loading: false });
        }, 800);
    };

    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="product__details__pic">
                        <div className="product__details__pic__item">
                            <img className="product__details__pic__item--large" src={product.thumbnai} alt={product.name} />
                        </div>
                        <div className="product__details__pic__slider owl-carousel">
                            <img data-imgbigurl="img/product/details/product-details-2.jpg" src="img/product/details/thumb-1.jpg" alt={product.name} />
                            <img data-imgbigurl="img/product/details/product-details-3.jpg" src="img/product/details/thumb-2.jpg" alt={product.name} />
                            <img data-imgbigurl="img/product/details/product-details-5.jpg" src="img/product/details/thumb-3.jpg" alt={product.name} />
                            <img data-imgbigurl="img/product/details/product-details-4.jpg" src="img/product/details/thumb-4.jpg" alt={product.name} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="product__details__text">
                        <h3>{product.name}</h3>
                        <h5>{product.category.name}</h5>
                        <div className="product__details__rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div className="product__details__price">${product.price}</div>
                        <p>
                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac
                            diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
                        </p>
                        <div className="product__details__quantity">
                            <div className="quantity">
                                <div className="pro-qty">
                                    <input onChange={changeQty} type="text" value={product.buy_qty} />
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn primary-btn" onClick={addToCart}>
                            ADD TO CART
                        </button>
                        <button type="button" className="heart-icon" onClick={addFavorites}>
                            <span className="icon_heart_alt"></span>
                        </button>
                        <ul>
                            <li>
                                <b>Availability</b> <span>In Stock</span>
                            </li>
                            <li>
                                <b>Shipping</b>{" "}
                                <span>
                                    01 day shipping. <samp>Free pickup today</samp>
                                </span>
                            </li>
                            <li>
                                <b>Weight</b> <span>0.5 kg</span>
                            </li>
                            <li>
                                <b>Share on</b>
                                <div className="share">
                                    <a href="#!">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#!">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#!">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="#!">
                                        <i className="fa fa-pinterest"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="product__details__tab">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">
                                    Description
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">
                                    Information
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">
                                    Reviews <span>(1)</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit
                                        tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus
                                        suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque
                                        nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                        posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                                    </p>
                                    <p>
                                        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit,
                                        eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris
                                        blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh.
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
                                    </p>
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <div className="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit
                                        tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus
                                        suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque
                                        nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                        posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                                    </p>
                                    <p>
                                        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit,
                                        eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris
                                        blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                    </p>
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-3" role="tabpanel">
                                <div className="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit
                                        tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus
                                        suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque
                                        nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                        posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title related__product__title">
                        <h2>Related Product</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                {relateds.map((e, k) => {
                    return (
                        <div key={k} class="col-lg-3 col-md-4 col-sm-6">
                            <ProductGrid product={e} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Product;
