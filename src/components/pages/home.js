import Sidebar from "../layouts/sidebar";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="row">
            <div className="col-lg-3 col-md-5">
                <Sidebar />
            </div>
            <div className="col-lg-9 col-md-7">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./img/banner/banner-1.jpg" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./img/banner/banner-2.jpg" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./img/banner/banner-1.jpg" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;
