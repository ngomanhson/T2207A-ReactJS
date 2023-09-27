import { Route, Routes } from "react-router-dom";

import Header from "./components/layouts/header";
import Breadcrumbs from "./components/layouts/breadcrumbs";
import Hero from "./components/layouts/hero";
import Footer from "./components/layouts/footer";
import Home from "./components/pages/home";
import Shop from "./components/pages/shop";
import Blog from "./components/pages/blog";
import Contact from "./components/pages/contact";
import Category from "./components/pages/category";
import Product from "./components/pages/products/product";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Breadcrumbs />
            <section className="product spad">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/category/:id" element={<Category />} />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;
