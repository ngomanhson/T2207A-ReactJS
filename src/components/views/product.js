// Stateless
// React Hook
import { useState } from "react";
function Product(props) {
    // properties
    const product = props.product;
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ margin: 30 + "px" }}>
            <img src={product.image} alt={product.name} width="200" />
            <h2>Ten san pham: {product.name}</h2>
            <p>Gia tien: ${product.price}</p>
            <p>{count}</p>
            <button type="button" onClick={add}>
                Add
            </button>
        </div>
    );
}

export default Product;
