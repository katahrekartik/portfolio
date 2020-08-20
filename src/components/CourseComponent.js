import React from 'react';
import {Button,Card} from 'react-bootstrap';


const BreadCrumb = ()=> {
    return(
        <div className="container-fluid breadcrumb">
            <div className="container">
                <div className="breadcrumb-innertext">
                    <h2>Our Courses</h2>
                    <p>
                        Home
                        <span> / </span>
                        Courses
                    </p>
                </div>
            </div>
        </div>
    );
}



function Course(props) {
    return(
        <React.Fragment>
        <BreadCrumb/>
        <div className="container courses-section">
        {/* Create 3 coumns in each rows */}
        <div className="row">
            <div className="col-12 col-md-4">
                <Card>
                <Card.Img variant="top" src="https://prabhaics.com/assets/cc1.jpg" style={{height:"250px"}} />
                <Card.Body>
                    <a className="title-button">Pub Ad | UPSC</a>
                    <Card.Title className="course-title">Pub Ad | UPSC UPPCS BPSC</Card.Title>
                    <Card.Text className="course-description">
                    We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series..
                    </Card.Text>
                    <div className="author-info">
                        <div className="author-img">
                            <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar_.png" alt=""/>
                        </div>
                        <div className="author-info-text">
                            <p>Conducted by</p>
                            <h5>Name</h5>
                        </div>
                        <div className="join-button">
                            <Button className="button" variant="primary" style={{}}>Join now</Button>
                        </div>
                    </div>
                </Card.Body>
                </Card>
            </div>
            <div className="col-12 col-md-4">
            <Card>
                <Card.Img variant="top" src="https://prabhaics.com/assets/cc2.jpg" style={{height:"250px"}} />
                <Card.Body>
                    <a className="title-button" >Ethics</a>
                    <Card.Title className="course-title">Ethics | UPSC UPPCS</Card.Title>
                    <Card.Text className="course-description">
                    We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series..
                    </Card.Text>
                    <div className="author-info">
                        <div className="author-img">
                            <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar_.png" alt=""/>
                        </div>
                        <div className="author-info-text">
                            <p>Conducted by</p>
                            <h5>Name</h5>
                        </div>
                        <div className="join-button">
                            <Button className="button" variant="primary" style={{}}>Join now</Button>
                        </div>
                    </div>
                </Card.Body>
                </Card>
            </div>
            <div className="col-12 col-md-4">
            <Card>
                <Card.Img variant="top" src="https://prabhaics.com/assets/cc3.jpg" style={{height:"250px"}} />
                <Card.Body>
                    <a className="title-button" >Disaster Manangement</a>
                    <Card.Title className="course-title">Disaster Management | UPSC UPPCS</Card.Title>
                    <Card.Text className="course-description">
                    We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series..
                    </Card.Text>
                    <div className="author-info">
                        <div className="author-img">
                            <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar_.png" alt=""/>
                        </div>
                        <div className="author-info-text">
                            <p>Conducted by</p>
                            <h5>Name</h5>
                        </div>
                        <div className="join-button">
                            <Button className="button" variant="primary">Join now</Button>
                        </div>
                    </div>
                </Card.Body>
                </Card>
            </div>

            <div className="col-12 col-md-4">
            <Card>
                <Card.Img variant="top" src="https://prabhaics.com/assets/cc4.jpg" style={{height:"250px"}} />
                <Card.Body>
                    <a className="title-button" >Hindi Sahitya</a>
                    <Card.Title className="course-title">Hindi Sahitya | UPSC UPPCS</Card.Title>
                    <Card.Text className="course-description">
                    We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series..
                    </Card.Text>
                    <div className="author-info">
                        <div className="author-img">
                            <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar_.png" alt=""/>
                        </div>
                        <div className="author-info-text">
                            <p>Conducted by</p>
                            <h5>Name</h5>
                        </div>
                        <div className="join-button">
                            <Button className="button" variant="primary">Join now</Button>
                        </div>
                    </div>
                </Card.Body>
                </Card>
            </div>

            <div className="col-12 col-md-4">
            <Card>
                <Card.Img variant="top" src="https://prabhaics.com/assets/cc5.jpg" style={{height:"250px"}} />
                <Card.Body>
                    <a className="title-button" >NCERT | SAAR</a>
                    <Card.Title className="course-title">NCERT | SAAR</Card.Title>
                    <Card.Text className="course-description">
                    We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series..
                    </Card.Text>
                    <div className="author-info">
                        <div className="author-img">
                            <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar_.png" alt=""/>
                        </div>
                        <div className="author-info-text">
                            <p>Conducted by</p>
                            <h5>Name</h5>
                        </div>
                        <div className="join-button">
                            <Button className="button" variant="primary">Join now</Button>
                        </div>
                    </div>
                </Card.Body>
                </Card>
            </div>
        </div>
        
    </div>
    </React.Fragment>
    );
}

export default Course;