import { Link } from "react-router-dom";

function Product(props) {
    // properties
    const product = props.product;
    return (
        <div className="product__item">
            <div className="product__item__pic set-bg">
                <img src={product.thumbnail} alt={product.name} />
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
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h6>
                <h5>${product.price}</h5>
            </div>
        </div>
    );
}
export default Product;
