import { useEffect, useState } from "react";
import api from "../../../service/api";
import url from "../../../service/url";
import { Link, useParams } from "react-router-dom";

function Related() {
    const { id } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);

    const loadCategory = async () => {
        try {
            const rs = await api.get(`${url.PRODUCT.CATEGORY}?categoryId=${id}`);
            setRelatedProducts(rs.data);
        } catch (err) {}
    };

    useEffect(() => {
        loadCategory();
    }, [id]);

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title related__product__title">
                        <h2>Related Product</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {relatedProducts.map((item, index) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${item.thumbnai})` }}>
                                    <ul className="product__item__pic__hover">
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-retweet"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>
                                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                                    </h6>
                                    <h5>${item.price}</h5>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Related;
