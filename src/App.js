import Header from "./components/layouts/header";
import Breadcrumbs from "./components/layouts/breadcrumbs";
import Hero from "./components/layouts/hero";
import Sidebar from "./components/layouts/sidebar";
import Footer from "./components/layouts/footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Breadcrumbs />
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9 col-md-7"></div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;
