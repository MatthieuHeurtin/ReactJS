import React, { Component } from 'react';
import './GlobalComponent.css';

import Header from './../Header/Header';
import Body from './../Body/Body';
import Foot from './../Foot/Foot';

class GlobalComponent extends Component {
    constructor(props) {
      super(props);
    }


    render() {
        return (
            <div className="GlobalComponent">
           <Header/>    
           <Body name="defaultContent"/>
           <Foot/>
            </div>
          );
    }
  }
  
  export default GlobalComponent;
