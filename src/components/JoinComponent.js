import React from 'react';

const BreadCrumb = ()=> {
    return(
        <div className="container-fluid breadcrumb">
            <div className="container">
                <div className="breadcrumb-innertext">
                    <h2>Join Classes</h2>
                    <p>
                        Home
                        <span> / </span>
                        Join classes
                    </p>
                </div>
            </div>
        </div>
    );
}


function Join(props) {
    return(
        <React.Fragment>
        <BreadCrumb/>
        <div className="container-fluid join-classes">
             <div className="container">
                 <div className="row">
                    <div className="col-12 col-md-6 join-classes-text-img">
                        <div className="join-classes-text">
                            <h2>Join Classes</h2>
                            <h3>Download <span>Mobileshaala</span> App</h3>
                            <h3>Use institute code <span>PICS1005</span></h3>
                        </div>
                        <div className="join-classes-img">
                            <img src="https://prabhaics.com/assets/playstore.png" alt=""/>
                            <img src="https://prabhaics.com/assets/appstore.svg" alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="https://prabhaics.com/assets/screen.png" alt="" width="300px" height="500px"style={{position:"absolute"}}/>
                        <img src="https://prabhaics.com/assets/iphonex.png" alt="" width="300px" height="500px"/>
                    </div>
                 </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Join;