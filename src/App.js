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

import Product from "./components/pages/product";
import { useReducer, useState } from "react";
import STATE from "./context/initState";
import { UserProvider } from "./context/context";
import Cart from "./components/pages/cart";
import reducer from "./context/reducer";
import Login from "./components/pages/login";

function App() {
    const [state, dispatch] = useReducer(reducer, STATE);
    return (
        <UserProvider value={{ state, dispatch }}>
            <div id="preloder" style={{ opacity: 0.8, display: state.loading ? "block" : "none" }}>
                <div class="loader"></div>
            </div>

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
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </div>
                </section>
                <Footer />
            </div>
        </UserProvider>
    );
}

export default App;
