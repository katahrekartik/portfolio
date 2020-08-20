import React, { useState,Component } from 'react';
// import {Link} from 'react-router-dom';
import { Collapse, CardBody, Card } from 'reactstrap';



//Component retrus the header carousel
const Header = () =>{
    return (
        <div className="header">
            <div className="header-content">
                <h2>Hello I m</h2>
                <h1>Kartik Katahre</h1>
                <p>Looking for an entry-level position to begin my career in a Professional environment to utilize my skills for the growth of the Organization as well as to enhance my knowledge and existing Skills. I wish to be part of success in an environment of growth and excellence.</p>
                <a href="/assets/docs/resume.pdf">Download resume</a>
            </div>
        </div>

    );
}

const Skills = ({skills}) =>{
    var width = '100%';
    return(
        <div className="skills-section" id="skills">
            <div className="container">
                <div className="section-heading">
                    <h2>Top <b>Skills</b></h2>
                </div>
                <div className="row">
                    {skills.map((skill)=>
                        <div className="col-md-6">
                        <div className="progress-container">
                            <h3>{skill.skillName}</h3>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="75" 
                            aria-valuemin="0" aria-valuemax="100" style={{width:skill.percentage,background:skill.color}}>
                            <span className="circle" style={{ background: skill.color}}></span>
                            <span className="skill-name" >{skill.percentage}</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    )
                    }
                    
                </div>
            </div>
        </div>
    );
}

const Projects = ({projects})=>{
    return(
        <div className="container" id="projects">
            <div className="section-heading">
                <h2>My <b>Projects</b></h2>
            </div>
            <div className="row project-section">
                {projects.map((project)=>
                    <div className="col-md-4">
                    <div className="project-box">
                    <img className="" src={project.projectImage} alt={project.projectName}/>
                    <div className="overlay">
                        <h5 className="project-title">{project.projectName}</h5>
                        {project.githubLink!=''?<a href={project.githubLink} target="blank"><i className="fa fa-github github-link link" aria-hidden="true"></i></a>:''}
                        {project.liveLink!=''?<a href={project.liveLink} target="blank"><i className="fa fa-eye live-link link" aria-hidden="true"></i></a>:''}
                        {project.projectreport!=''?<a href={project.projectreport} target="blank"><i className="fa fa-info link" aria-hidden="true"></i></a>:''}
                    </div>
                    </div>
                    </div>    
                )}
            </div>
        </div>
    );
}

const Education = ({educations}) =>{
    const [isOpenBtech, setIsOpenBtech] = useState(false);
    const [isOpen12, setIsOpen12] = useState(false);
    const [isOpen10, setIsOpen10] = useState(false);

  const toggleBtech = () => setIsOpenBtech(!isOpenBtech);
  const toggle12 = () => setIsOpen12(!isOpen12);
  const toggle10 = () => setIsOpen10(!isOpen10);
    return(
        <div className="container" id="education-section">
            <div className="section-heading">
                <h2>My <b>Education</b></h2>
            </div>
            <div>
            <div className="panel-group">
                <div className="panel panel-default" onClick={toggleBtech}>
                <div className="panel-heading" >Bachelor of Engineering</div>
                <div className="panel-body">
                    <Collapse isOpen={isOpenBtech}>
                        <Card>
                        <CardBody>
                            <div className="education-details">
                                <div className="school-name">
                                    <h2>Indian Institute of information Technology Design & Manufacturing Jabalpur</h2>
                                </div>
                                <div className="education-year">
                                    <h3>2016 - 2020</h3>
                                </div>
                            </div>
                        </CardBody>
                        </Card>
                    </Collapse>        
                </div>
                </div>
            </div>
            <div className="panel-group">
                <div className="panel panel-default" onClick={toggle12}>
                <div className="panel-heading" >Intermediate</div>
                <div className="panel-body">
                    <Collapse isOpen={isOpen12}>
                        <Card>
                        <CardBody>
                            <div className="education-details">
                                <div className="school-name">
                                    <h2>Excellence School Damoh, Madhya Pradesh </h2>
                                </div>
                                <div className="education-year">
                                    <h3>2015</h3>
                                </div>
                            </div>
                        </CardBody>
                        </Card>
                    </Collapse>        
                </div>
                </div>
            </div>
            <div className="panel-group">
                <div className="panel panel-default" onClick={toggle10}>
                <div className="panel-heading" >Matriculation</div>
                <div className="panel-body">
                    <Collapse isOpen={isOpen10}>
                        <Card>
                        <CardBody>
                            <div className="education-details">
                                <div className="school-name">
                                    <h2>Excellence School Damoh, Madhya Pradesh</h2>
                                </div>
                                <div className="education-year">
                                    <h3>2013</h3>
                                </div>
                            </div>
                        </CardBody>
                        </Card>
                    </Collapse>        
                </div>
                </div>
            </div>

            {/* <Button color="primary"  style={{ marginBottom: '1rem' }}>Toggle</Button> */}
            

            </div>
        </div>
    );
}

const Experience = ()=>{
    
    return(
        <div className="container" id="experience">
            <div className="section-heading">
                <h2>My <b>Projects</b></h2>
            </div>
        </div>
        
    );
}




class Home extends Component{

   constructor(props){
       super(props);
       console.log(props);
   }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="side-bar">
                        <div className="profile-img">
                        <img src="assets/images/profile.jpg" alt=""/>
                        </div>
                        <h1> <a href=""> Kartik Katahre </a> </h1>
                        <p>Full stack Web developer</p>
                        <div className="main-menu">
                            <ul>
                                <li><a href="" className="main-menu-active">Home</a></li>
                                <li><a href="#skills">My skills</a></li>
                                <li><a href="#education-section">Education</a></li>
                                <li><a href="#projects">Project</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                
                    <div className="col-md-9">
                        <div className="main-content">
                            <Header/>
                            <div className="resume-details">
                                <Skills skills={this.props.skills}/>
                                <Projects projects={this.props.projects}/>
                                {/* <Education educations={this.props.educations}/>
                                <Experience/> */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
     
        
}

// export home component
export default Home;