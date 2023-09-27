import { useParams } from "react-router-dom";
import Sidebar from "../layouts/sidebar";
import { useState, useEffect } from "react";
import url from "../../service/url";
import api from "../../service/api";

function Category() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const loadProduct = async () => {
        try {
            const rs = await api.get(`${url.PRODUCT.CATEGORY}?categoryId=${id}`);
            console.log(rs);
            setProduct(rs.data);
        } catch (err) {}
    };

    useEffect(() => {
        loadProduct();
    }, [id]);

    return (
        <div className="row">
            <div className="col-lg-3 col-md-5">
                <Sidebar />
            </div>
            <div className="col-lg-9 col-md-7">
                <div className="row">
                    {product.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
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
                                            <a href="#!">{item.name}</a>
                                        </h6>
                                        <h5>${item.price}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Category;
