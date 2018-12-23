import React, { Component } from "react";
import './MainSidebar.css';
import * as data from './LearningObjects.json';
import Parser from 'html-react-parser';

class MainSidebar extends Component {
  constructor(props) {
    super(props);
    console.log (this.props);
  }

  returnPTag () {
    var iteratorString;
    var arrayToReturn = [];
    for (var i in data.default) {
      // If the i matches the content that is being displayed, set it as active

      if (i === this.props.topicName) {
        arrayToReturn.push (<li className="active-sidebar" key={i}><p>{i}</p></li>);        
      } else {
        arrayToReturn.push (<li key={i}><p>{i}</p></li>);        
      }


    }

    // For each element in the array, put it inside a react fragment, 
    // then return the whole thing
    return (<React.Fragment>
      {arrayToReturn}
      </React.Fragment>);
  }

  render () {
    return (
      <nav className="sidebar-nav">
        <div className="sidebar-logo"></div>
        <ul>
          {this.returnPTag ()}
          <br></br>
          <br></br>
          <br></br>
          <li>
            <p>
              Current Topic : {this.props.topicName}
            </p>
          </li>
        </ul>

      </nav>
    );
  }
};

export default MainSidebar;