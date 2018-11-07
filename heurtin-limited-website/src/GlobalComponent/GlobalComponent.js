import React, { Component } from 'react';
import './GlobalComponent.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './../Header/Header';
import Body from './../Body/Body';
import Foot from './../Foot/Foot';
import Popup from './../Popup/Popup'

class GlobalComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { isOpen: false };
    }

    componentDidMount(){
      this.toggleModal()
    }

    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {

      let bck_class = this.state.isOpen ? "backdrop" : "GlobalComponent";

        return (
            <div  className={bck_class}>

           <Popup show={this.state.isOpen} onClose={this.toggleModal}/>            
            <Header/>    
           <Body name="defaultContent"/>
           <Foot/> 

            </div>
          );
    }
  }
  
  export default GlobalComponent;
