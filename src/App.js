import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import fetch from 'react-fetch';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

class App extends Component {

  //new code  ************************************

  state = {
    videos: []
  }
componentDidMount() {
  console.log("componentDidMount getVideos")
  this.getVideos();
}


async getVideos() {
  // GET request using fetch with async/await
  const response = await fetch('http://localhost:4001/api/mike');
  const cameraName = await response.json();
  this.setState({ videos: cameraName})
  console.log('camera Names = ',cameraName)
}

renderVideos = ({camera_name}) => <div key = {camera_name}></div>

  //new code  ***********************************************
  render() {
    console.log("app.js render")
    const { videos } = this.state;
    console.log('meb test')
    return (
      <BrowserRouter>
        <div className="App">
          { videos.map(this.renderVideos)}
          <h4>This is a test</h4>
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
