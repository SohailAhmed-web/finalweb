import React from 'react';
import "./testimonial.css";
import testimonailimage from "../assets/imgs/testimonialimg.png"
import { Container, Row, Col, Image } from 'react-bootstrap';

const TestimonialsComponent = () => {
    return (

        <div className='testimonial d-flex '>
            <div className="rounded-circle  col-sm-12 col-md-12 col-lg-6 col-xl-6" style={{ width: '512px', height: '512px', padding: '100px', marginTop: '50px' }}>

                <h6 style={{ color: 'white' }}>Testimonials</h6>
                <h1 style={{ color: 'white' }}>What People Are Saying</h1>
                <h5 style={{ color: 'white' }}>Multi Chain Interoperability</h5>

                <Image
                    src={testimonailimage} // Replace with the actual URL of your image
                    alt="Testimonial"
                    className="w-100 h-100 object-fit-cover"
                />
                                <p style={{ color: 'white', padding: '6 0px', width:'500px'}}>- Sophie Adderiy</p>

            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <p style={{ color: 'white' , width: '512px', height: '512px', padding: '100px', marginTop: '220px'}}>
                    “Web3makr provides a solution for web3 developers and 
                     beginners by integrating the drag and drop feature for 
                     properties like NFT Search Marketplace, Wallet Integration, 
                     downloadable source code, and Smart Contract. Aside from this, 
                     the software also provides its users with ready-made and 
                     customizable templates that users can use when creating their web3 applications.”
                </p>
            </div>
        </div>


    );
};

export default TestimonialsComponent;
