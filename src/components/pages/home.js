import Sidebar from "../layouts/sidebar";

function Home() {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-5">
                <Sidebar />
            </div>
            <div className="col-lg-9 col-md-7">
                <h1>Home page</h1>
            </div>
        </div>
    );
}

export default Home;
