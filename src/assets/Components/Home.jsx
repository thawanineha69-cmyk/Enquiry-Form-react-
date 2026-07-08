import React, { useState } from 'react'
import Header from './Common/Header';
import Footer from './Common/Footer';
import EnquiryForm from './EnquiryForm';
import EnquiryData from './EnquiryData';




export default function Home() {

     var userData = JSON.parse(localStorage.getItem('user_infos'));
     const [userInformation, setUserInformation] = useState([])


    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold text-primary">
                        Welcome to My Website
                    </h1>
                    <p className="lead">
                        Professional Enquiry Management System
                    </p>
                    <button className="btn btn-primary btn-lg">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Enquiry Form */}
                <EnquiryForm userInformation={userInformation} setUserInformation={setUserInformation} />
            {/* Dummy Table */}
                <EnquiryData userInformation={userInformation} />
            <Footer />
        </>
    );
};

