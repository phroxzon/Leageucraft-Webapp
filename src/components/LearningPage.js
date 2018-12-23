import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Landing.css";

import Parser from 'html-react-parser';
import Navbar from "./Navbar";
import MainSidebar from "./MainSidebar";

class LearningPage extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
          <Navbar ref={this.topNav}/>
          <div className="main-wrapper">
            <div className="flexbox">
              <div className="flex-sidebar">
                <MainSidebar topicName={this.props.match.params.topicName}/>
              </div>
              <div className="flex-main">
                {Parser(String(this.props.location.state.content))}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(LearningPage);
