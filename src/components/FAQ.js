import React from 'react';
import './FAQ.css';

import { Container, Row, Col, Image } from 'react-bootstrap';

const FAQComponent = () => {
    return (

        <div className='faq d-flex '>
            <div className="rounded-circle  col-sm-12 col-md-12 col-lg-6 col-xl-6" style={{ width: '512px', height: '512px', padding: '100px', marginTop: '50px' }}>

                <h1 style={{ color: 'black' }}>Frequently asked questions</h1>
                <h5 style={{ color: '979797' }}>Have a question? Check out our frequently asked questions to find your answer.</h5>

                <h1 style={{ color: 'black', padding: '6 0px', width:'500px', marginTop:'400px'}}>Our blog</h1>

            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h4 style={{ color: 'black', padding: '6 0px', width:'500px', padding: '100px', marginTop: '50px'}}>What is Web3Makr and what does it do?</h4>
                <p style={{ color: 'black' , width: '512px', height: '512px', padding: '100px', marginTop: '2px'}}>
                <h4 style={{ color: '979797', padding: '6 0px', width:'500px', marginBottom:'5px'}}>Why should I use Web3Mkr?</h4>

                Web3makr provides a solution for web3 developers and beginners by
                integrating the drag and drop feature for properties like NFT Search Marketplace,
                Wallet Integration, downloadable source code, and Smart Contract. Aside from this, 
                the software also provides its users with ready-made and customizable templates
                that users can use when creating their web3 applications.

                <h4 style={{ color: 'black', padding: '6 0px', width:'500px'}}>What is Web3Makr and what does it do?</h4>

                </p>
            </div>
        </div>


    );
};

export default FAQComponent;
