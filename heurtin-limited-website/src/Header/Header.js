import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    constructor(props){
        super(props);
    }


    
    render() {
        return (
            <div className="Header">
              <h1>Matt's website</h1>
            </div>
          );
    }
}

export default Header