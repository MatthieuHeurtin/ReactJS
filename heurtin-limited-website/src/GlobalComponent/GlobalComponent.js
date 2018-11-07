import React, { Component } from 'react';
import './GlobalComponent.css';



import Header from './../Header/Header';
import Body from './../Body/Body';
import Foot from './../Foot/Foot';
import Popup from './../Popup/Popup';


class GlobalComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {displayPopup: false};
      this.togglePopup = this.togglePopup.bind(this);
    }

      
    componentDidMount(){
     this.togglePopup()
    }

    togglePopup() {
      this.setState({
        displayPopup: !this.state.displayPopup
      });
    }

    render() {

      

        return (
            <div  className='GlobalComponent'>
            <Header/>    
           <Body name="defaultContent"/>
           <Foot/> 
           {this.state.displayPopup ? 
          <Popup closePopup={this.togglePopup.bind(this)}/>
          : null
        }

            </div>
          );
    }
  }
  
  export default GlobalComponent;
