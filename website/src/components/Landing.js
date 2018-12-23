import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Landing.css";
import * as data from './LearningObjects.json';
import myVideo from './video.mp4';

import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import Accordion from "./Accordion";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champ: null, 
      name: "", 
      isExpanded: false
    };

    // this.submit = this.submit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleChampChange = this.handleChampChange.bind(this);
  }

  toggleHidden () {
  	this.setState ({
  		isExpanded: !this.state.isExpanded
  	})
  }

  handleNameChange(event) {
    var searchQuery = event.target.value;
    this.setState({ name: searchQuery });
  }

  handleChampChange(champ) {
    this.setState({ champ });
  }

  createAccordion(tags, skillFloor, skillCap, urlExtension, role, content, descriptionImage, shortDescription, longDescription, youtubeLink, sidebarActive, sidebarParent) {
    // isExpanded is the lone prop to send at the end. 
    // Accordion.js expects isExpanded prop. 

    return (
      <Accordion tags={tags} skillFloor={skillFloor} skillCap={skillCap} urlExtension={urlExtension} role={role} content={content} descriptionImage={descriptionImage} shortDescription={shortDescription} longDescription={longDescription} youtubeLink={youtubeLink} sidebarActive={sidebarActive} sidebarParent={sidebarParent} isExpanded={this.state.isExpanded}></Accordion>
    );
  }

  populateLearningObjects () {
  	// i is the learning objects, eg. Trading Stance, Balance Wave. 
  	// j is the keys, eg. tags, skillfloor
  	// For each i, create an accordion, with all the keys included in the
  	// create accordion method. 

  	// If need to change the number of keys in LearningObjects.json, change populateLearningObjects, createAccordion, Accordion.js and LearningObjects.json

  	var iteratorString;
  	var arrayOfAccordions = [];
  	for (var i in data.default) {
  		iteratorString = this.createAccordion (data.default[i].tags, data.default[i].skillFloor, data.default[i].skillCap, data.default[i].urlExtension, data.default[i].role, data.default[i].content, data.default[i].descriptionImage, data.default[i].shortDescription, data.default[i].longDescription, data.default[i].youtubeLink, data.default[i].sidebarActive, data.default[i].sidebarParent);
  		arrayOfAccordions.push (iteratorString);
  	}

  	// For each element in the array, put it inside a react fragment, 
  	// then return the whole thing

  	return (<React.Fragment>
  		{React.Children.toArray(arrayOfAccordions)}
      </React.Fragment>);
  }

//          	  <iframe width="560" height="315" src="http://www.youtube.com/embed/GRonxog5mbw?autoplay=1&loop=1&controls=0&mute=1&playlist=GRonxog5mbw" frameborder="0" allowfullscreen></iframe>​

  render() {
    return (
        <div>
          <Navbar />
          <div className="landing-main">
          	  <video src={myVideo} width="100%" height="100%" style={{paddingTop: '(--nav-bar-height)'}} type="video/mp4" autoPlay muted loop></video>
	          <div className="toggle-checkbox">
	          	<label className="inner-checkbox">Click to show long descriptions</label>
	          	<input className="inner-checkbox" type="checkbox" onChange={(e) => this.toggleHidden(e)}></input>
	          </div>
	          <div className="content">
	              <div className="panel-group">
	              	  {this.populateLearningObjects ()}
	              </div>
	          </div>
            </div>
        </div>
    );
  }
}

export default withRouter(Landing);
