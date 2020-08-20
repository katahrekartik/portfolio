// This class component will be use to manage the states for all other components and the other components 
// will work as a presentational component which are implemented using function components
import React, { Component } from 'react';

import Home from './HomeComponent';

import { Switch, Route, Redirect } from 'react-router-dom';
import {PROJECTS} from '../shared/projects';
import {SKILLS} from '../shared/skills';
import {EDUCATIONS} from '../shared/educations';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects:PROJECTS,
      skills:SKILLS,
      educations:EDUCATIONS,
    }
    
  }
 

  render() {
  
    
    return (
        <div>
        
        <Switch>
            <Route path='/'  component={()=><Home projects={this.state.projects} skills={this.state.skills} educations={this.state.educations}/>} />
            {/* <Route exact path='/contactus' component={Contact} />} />
            <Route exact path='/join' component={Join} />} />
            <Route exact path='/books' component={Book} />} />
            <Route exact path='/courses' component={Course} />} /> */}
            {/* Default rederect to home */}
            <Redirect to='/' />
        </Switch>
      
        </div>
   
       
      
    );
  }
}

export default Main;