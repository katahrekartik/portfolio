import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return(
    <div className="container-fluid footer">
        <div className="container">
            {/* create two coumns  */}
            <div className="row">
                <div className="col-12 col-md-7 footer-about">
                    <span style={{display:"flex"}}>
                        <img src="https://prabhaics.com/assets/logo.png" alt=""/>
                        <h2 >Prabha Institute</h2>
                    </span> 
                        <p>Prabha institute of Civil Services was established on 15th
                            August, 2002 for the benefit of the students who want to prepare for Public Administration
                            but find limited options when it comes to Hindi medium. From 2002 till date we have been
                            playing a vital role in bringing the Civil Service aspirants into the mainstream of civil
                            service examination.</p>
                </div>
                <div className="col-12 col-md-5 footer-contact" >
                    <h2>Contact us</h2>
                    <p><span className="fa fa-address-card fa-lg"></span> <span>Address: </span>
                    Virat Bhawan Dr. Mukherjee Nagar,
                    </p>
                    <p><span className="fa fa-phone fa-lg"></span> <span>Phone: </span>
                    +91 9810651005
                    </p>
                    <p><span className="fa fa-envelope fa-lg"></span> <span>Email: </span>
                    atulklohiya@gmail.com
                    </p>
                    
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2019 Prabha Institute of Civil Services powered by Mobishaala</p>
        </div>
    </div>
    )
}

export default Footer;