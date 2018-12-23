import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Parser from 'html-react-parser';

class Accordion extends Component {
    constructor(props) {
        super(props)
        this.shortDescription = React.createRef()
    }


    componentDidMount () {
        this.setState({
            isExpanded: this.props.isHidden
        })
        this.clientHeight = this.shortDescription.current.offsetHeight;
    }

    handleToggle() {
        const { history } = this.props;
        this.props.history.push (this.props.urlExtension);

        //this.props.history.push({
        //this.props.history.replace (this.props.urlExtension);
    }

        //     <Link
        //   to={
        //     this.state.champ && this.state.name.length > 0
        //       ? `/timeline/${this.state.name}/${this.state.champ.id}`
        //       : "/timeline"
        //   }
        //   style={{ textDecoration: "none", color: "White" }}
        // >Hello</Link>

    // insertRandomText(children) {
    // 	var asdf = String (children);
    // 	return (
	   //  	Parser(asdf)
    // 	)
    // }

    // showAccordionChildren () {
    //     var isHidden = this.props.isHidden;
    //     this.setState ({isExpanded: isHidden});
    // }
    // const {isExpanded, height} = this.state;
    
    // <div onClick={() => this.handleToggle()} className={descriptionImage}></div>
    
    render(){
        const {tags, skillFloor, skillCap, urlExtension, role, content, descriptionImage, shortDescription, longDescription, youtubeLink, sidebarActive, sidebarParent, isExpanded} = this.props;
        const showPanel = isExpanded ? 1 : 0;
        const shortDescStyle = showPanel ? {height: '0px', overflow: 'hidden', opacity: 0} : {height: this.clientHeight + 'px', display: 'inline-block', opacity: 1};
        console.log (urlExtension);

        return (
            <div className={`panel ${isExpanded ? 'is-expanded' : ''}`}>
                <div className="panel-heading">
                <Link to={{pathname: urlExtension, state: {tags, skillFloor, skillCap, urlExtension, role, content, descriptionImage, shortDescription, longDescription, youtubeLink, sidebarActive, sidebarParent, isExpanded}}}>
                    <div className={descriptionImage}></div>
                </Link>

                </div>
                <div className="short-description" ref={this.shortDescription} style={shortDescStyle}>
                    {Parser(String(shortDescription))}
                </div>
                <div className="panel-collapse" style={{opacity: showPanel}}>
                    <div className="panel-body">            
                        {Parser(String(longDescription))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Accordion);