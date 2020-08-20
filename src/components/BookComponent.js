import React from 'react';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreadCrumb = ()=> {
    return(
        <div className="container-fluid breadcrumb">
            <div className="container">
                <div className="breadcrumb-innertext">
                    <h2>Our Books</h2>
                    <p>
                        Home
                        <span> / </span>
                        Books
                    </p>
                </div>
            </div>
        </div>
    );
}

function Book(props) {
    return(
        //React fragement for wrapping the code  
        <React.Fragment>
        {/* BreadCrumb functional component */}
        <BreadCrumb/>
        <div className="container books-page-section">
            {/* Create 4 columns  */}
             <div className="row">
                <div className="col-12 col-md-3 mt-5 mb-5">
                    <Image className="book-img" src="https://prabhaics.com/assets/b1.jpg" thumbnail />
                </div>
                <div className="col-12 col-md-3 mt-5 mb-5">
                    <Image className="book-img" src="https://prabhaics.com/assets/b2.jpg" thumbnail />
                </div>
                <div className="col-12 col-md-3 mt-5 mb-5">
                    <Image className="book-img" src="https://prabhaics.com/assets/b3.jpg" thumbnail />
                </div>
                <div className="col-12 col-md-3 mt-5 mb-5">
                    <Image className="book-img" src="https://prabhaics.com/assets/b4.jpg" thumbnail />
                </div>
                
            </div>
        </div>
        </React.Fragment>
    );
}

export default Book;