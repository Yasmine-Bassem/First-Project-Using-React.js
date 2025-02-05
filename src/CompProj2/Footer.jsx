import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">About Us</a></li>
                            <li><a href="#" className="text-white">Services</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h5>Social Media</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com" className="text-white">Facebook</a></li>
                            <li><a href="https://www.twitter.com" className="text-white">Twitter</a></li>
                            <li><a href="https://www.instagram.com" className="text-white">Instagram</a></li>
                            <li><a href="https://www.linkedin.com" className="text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                    
                </div>


                <div className="mt-3">
                    <a href="https://www.facebook.com" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.twitter.com" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com" className="text-white mx-2"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
