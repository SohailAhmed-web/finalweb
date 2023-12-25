import React from 'react';
import pic1 from "../assets/imgs/pic1.png";
import pic2 from "../assets/imgs/pic2.png";
import pic3 from "../assets/imgs/pic3.png";
import pic4 from "../assets/imgs/pic4.png";
import pic5 from "../assets/imgs/pic5.png";
import pic6 from "../assets/imgs/pic6.png";
import "./future.css"

const Future = () => {
    return (
        <section className="bg-dark bg-image">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="heading">The Future of Web3 NoCode </h2>
                        <p className="heading_sub">
                            Web3Makr allows you to incorporate top-ranked blockchain platforms into your work through the drag and drop feature.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <ul className="future mt-5">
                            <li>
                                <span className="active_ul car_ds">Multi-chain</span>
                            </li>
                            <li>
                                <span className="ul_future car_ds">Dashboard</span>
                            </li>
                            <li>
                                <span className="ul_future car_ds">Tool</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <div className="image_area bg-white rounded-circle w-75 text-center m-3 border-orange">
                                        <img src={pic1} className="w-100 p-3 rounded-border-orange car_ds" alt="pic1" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="image_area rounded-circle w-75 text-center m-3 border-light-blue car_ds">
                                        <img src={pic2}  className="w-100 p-2 rounded-circle" alt="pic2" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="image_area rounded-circle w-75 text-center m-3 border-light-green car_ds">
                                        <img src={pic3}  className="w-100 p-2 rounded-circle" alt="pic3" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="image_area bg-white rounded-circle w-75 text-center m-3  rounded-black car_ds">
                                        <img src={pic4}  className="w-100 p-3 rounded-border-orange" alt="pic4" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="image_area bg-white rounded-circle w-75 text-center m-3 rounded-dark-orange car_ds">
                                        <img src={pic5}  className="w-100 p-3 rounded-border-orange" alt="pic5" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="image_area rounded-circle w-75 text-center m-3 border-light-yeloow car_ds">
                                        <img src={pic6}  className="w-100 p-2 rounded-circle" alt="pic6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Future;
