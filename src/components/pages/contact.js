import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Contact() {
    const newAddressCoords = {
        lat: 1.0287833,
        lng: 105.7822779,
    };

    const defaultProps = {
        center: newAddressCoords,
        zoom: 15,
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_phone"></span>
                        <h4>Phone</h4>
                        <p>+01-3-8888-6868</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_pin_alt"></span>
                        <h4>Address</h4>
                        <p>60-49 Road 11378 New York</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_clock_alt"></span>
                        <h4>Open time</h4>
                        <p>10:00 am to 23:00 pm</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_mail_alt"></span>
                        <h4>Email</h4>
                        <p>hello@colorlib.com</p>
                    </div>
                </div>
                <div style={{ height: "100vh", width: "100%" }}>
                    <GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                        <AnyReactComponent lat={newAddressCoords.lat} lng={newAddressCoords.lng} text="FPT APTECH" />
                    </GoogleMapReact>
                </div>
            </div>
            <div className="contact-form spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact__form__title">
                                <h2>Leave Message</h2>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your name" required />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your Email" required />
                            </div>
                            <div className="col-lg-12 text-center">
                                <textarea placeholder="Your message"></textarea>
                                <button type="submit" className="site-btn">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;
